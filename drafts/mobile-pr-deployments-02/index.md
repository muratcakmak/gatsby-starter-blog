---
title: Preview PR Deployments for React Native Projects
date: "2021-05-05T21:12:03.284Z"
description: Let's bring convenient preview PR deployments to iOS side of React Native Projects (Android is doable too)
---

# Application side

Appcenter has a documented API which I thought we could leverage from the application. The idea is simple. We'll run get request to appcenter api to fetch the list of available deployments and list them in a list view. Once user clicks a deployment, we'll run `codepush.sync` to download an install the deployment. The app will restart and we'll see our changes.

### Appcenter API

A fetch request against `[https://openapi.appcenter.ms/#/codepush/codePushDeployments_list](https://openapi.appcenter.ms/#/codepush/codePushDeployments_list)` required for listing available deployments. Available endpoint for Appcenter is listed on [https://openapi.appcenter.ms/](https://openapi.appcenter.ms/).

Even though it is a well-documented API, it was a little bit struggle at first. After I found what I was looking for, it got way straightforward. Openapi has approachable UI which let's you run curl command from browser so the parameters are easy to access.

After getting my hands dirty with API, I went ahead and integrate the endpoint on the frontend. The frontend code is something similar to this.

## Frontend Code

I decided to build a dedicated developer screen which contains all available updates.

## Deep Linking

- Setting up deep linking on iOS is a solved problem, you can follow one of the guides here. [https://reactnavigation.org/docs/deep-linking/](https://reactnavigation.org/docs/deep-linking/) and [https://reactnavigation.org/docs/configuring-links](https://reactnavigation.org/docs/configuring-links)

## More on Github Actions

## Creating QR Links

Creating QR Links is way easier than I thought it would has been.
