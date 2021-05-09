---
title: Preview PR Deployments for React Native Projects
date: "2021-05-05T21:12:03.284Z"
description: Let's bring convenient preview PR deployments to iOS side of React Native Projects (Android is doable too)
---

## What is Preview Deployments

PR(Pull request) Preview Deployments are handy for the developer and the shareholder to review the work before kicking off the deployment

Benefits:

- Previewing the changes in the isolation
- Sharing the changes with the stakeholders (QA, Product, etc) helps to catch some details before they got deployed
- Seamless iteration

Every push to a feature branch provides a preview URL so you can accomplish the goals above.

Unfortunately, preview deployments are not that straightforward in bare React Native projects. I couldn't find any third-party service to achieve this so I get my hands dirty and came up with my solutions.

## Before we start

Your project should have the following conditions:

- A bare React Native project
- Codepush setup
- Hosted on GitHub

In high level, we'll use github to host our codebase. We'll leverage codepush's API to accomplish our goal.

I will not go into the details of how Codepush setup. Feel free to follow along the official documentation. [https://docs.microsoft.com/en-us/appcenter/distribution/codepush/rn-get-started](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/rn-get-started)

### What we learn

- Github Actions
- Codepush API
- How OTA works

### Strategy

Preview deployments are pretty much available for web projects. Let's observe how it is accomplished:

1. Develop the feature on your local
2. Create a PR on your repository
3. A third party service (Vercel/Netlify) kicks off a deployment with your recent changes
4. The third party service of your choice post a comment back to your PR with the preview link
5. You'll happily share the link with stakeholders

We'll employ pretty similar strategy:

1. Develop the feature on your local
2. Create a PR on your repository
3. A github action will kick off a workflow to create a new bucket on codepush
4. Then the very same action will kick off a deployment on Codepush
5. If Codepush deployment is successful, it post a comment with a QR code which has a deep link to the changes on the branch
6. Another Github action kicks off code push deployment with each PR update and repeats the step 4 and 5 again and again
7. The third Github action will remove the codepush bucket when PR is closed (either merged or closed manually)

## Github actions and life cycles of a PR

I want to run github actions for codepush command on the occurence of three events.

1. Pull request is created
2. Push changes to the existing pull request
3. Pull request closed (either merge to the master or closed manually for some reason)

Fortunately, Github projects such lifecycle events. However, the document isn't that straightforward to navigate.

1.

```yaml
on:
  pull_request:
    types: [opened]
```

2.

```yaml
on: push
```

3.

```yaml
on:
  pull_request:
    types: [closed]
```

I created three Github actions.

- `mobile-pr-preview-create.yml` creates the bucket. I can be seen on your `[appcenter.ms](http://appcenter.ms)` dashboard.

![blog-02](https://i.postimg.cc/9F7DHXtm/blog-01.jpg)

- `mobile-pr-preview-update.yml` runs when push. It kicks off a deployment on Appcenter

![blog-02](https://i.postimg.cc/DwQmmCMR/blog-02.jpg)

- `mobile-pr-preview-delete.yml` runs when PR is closed (either merged or closed). It removes the bucket from Appcenter.

## Integrating Codepush commands into Github actions

We'll use `act`. `act` is a cool project that written in Go and it allows you to run Github Actions locally.

In the first, we should find a unique name for the bucket. I go with branch name. We leverage a Github action already created for getting branch name as shown below

```yaml
name: Create Mobile PR Preview Bucket

on:
  pull_request:
    types: [opened]

jobs:
  mobile-pr-preview-create-bucket:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Git branch name
        id: git-branch-name
        uses: EthanSK/git-branch-name-action@v1
      - name: Echo the branch name
        run: echo "Branch name ${GIT_BRANCH_NAME}"
      - name: Download appcenter (codepush)
        run: sudo npm install -g appcenter-cli
      - name: List appcenter version
        run: appcenter -v
      - name: Login appcenter
        run: appcenter login --token ${{ secrets.CODEPUSH_TOKEN }}
      - name: Create bucket on appcenter and deploy to appcenter [iOS]
        run: |
          cd packages/mobile
          appcenter codepush deployment add ${GIT_BRANCH_NAME} -a OrganizationName/ApplicationName
```

And then we'll create a bucket with the command below:

```bash
appcenter codepush deployment add $branch-name -a OrganizationName/ApplicationName
```

Bucket creation is important since it is the place where we'll push updates so it should run when pull request created. It's fortunate that Github action `on` property which is kinda lifecycle method.

_Important_: The unfortunate thing is it doesn't work if pull request has merge conflicts. I resolved the merge conflicts and continue to work on code push commands.

We want to update the bucket when there is a change so we should kick off a deployment on code push. Because bucket is created this will not error out.

```bash
appcenter codepush release-react -a $ApplicationName -d ${GIT_BRANCH_NAME} -e ./index.js -p ./ios/applicationName/Info.plist -t `cat package.json | jq -r .version` || yarn postcodePushIos && echo \"Codepush iOS Update Failed.
```

At the last step, we want to remove the bucket so it won't appear on the developer menu. Deployment removal require a respond to the prompt so I added yes in front of it.

```bash
yes Y | appcenter codepush deployment remove ${GIT_BRANCH_NAME} -a OrganizationName/ApplicationName
```

We have pretty solid ground for preview deployments so let's wire them up on the frontend and see how things going on.
