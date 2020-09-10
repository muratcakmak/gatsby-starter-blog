---
title: VSCode and TSLint Setup
date: "2020-07-11T21:12:03.284Z"
description: Explains how to setup format on save on VSCode with TSLint rules
tags: ["linter", "tslin", "ts", "typescript", "vscode", "microsoft"]
---

## TLDR;

TSLint will hopefully be deprecated next year (2021). Till then it is the best linter option for Typescript project and VSCode should work with it properly

### Example TSLint Rules

```json
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "rules": {
    "ordered-imports": true,
    "object-literal-sort-keys": true,
    "member-ordering": true,
    "no-console": true,
    "jsx-no-lambda": true
  }
}
```

### How to setup VSCode to format on save based on TSLint Rules

1. Press `CMD + ,` or click `Code`, `Preferences` and `Settings`

2. Click the icon below ![vscode](https://i.ibb.co/Jp3d3w0/6742274-F-5577-4-EB5-B00-F-7-C14-CA445-DBA.jpg)

3. Add `"tslint.autoFixOnSave": true` to settings.json file

### Conclusion

Your VSCode should format on save and live happily ever after with TSLint
