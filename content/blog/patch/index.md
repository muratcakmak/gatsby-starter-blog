---
title: Patching npm packages for good
date: "2020-09-17T21:12:03.284Z"
description: React Native ecosystem have many packages not frequently updated and I will work through how to bandaid those packages
tags: ["react-native", "javascript", "patching", "patch-package", "vscode", "microsoft"]
---

## Introduction

In React Native development, there is a common scenario if you support react-native-web.

- Find a package that fits your use case completely
- Install and use it
- Crashes for web
- The fix is one-liner on library

There is two options in that case. You either create a PR with your fix or fork the library and mantain your local version. Both of them has their downsides. Your PR might not be reviewed for weeks and you would need that fix immediately. And it can be pretty overwhelming to fork repos and mantain your own version.

The solution is here: patch-package

### patch-package

According to its documentation: [patch-package](https://www.npmjs.com/package/patch-package) lets app authors instantly make and keep fixes to npm dependencies. It's a vital band-aid for those of us living on the bleeding edge.

### How does it work

1. Go find the library that you'd like to update in `node_modules` folder.
2. Make your changes
3. Run `npx patch-package package-name`
4. Run `yarn install patch-package -D`
5. Add `"postinstall": "patch-package"` to your `scripts` key in `package.json` file

Step 4 and Step5 guarantee that your `node_modules` will be overwritten by your patch each time you `yarn`.