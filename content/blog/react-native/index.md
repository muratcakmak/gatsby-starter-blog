---
title: React Native Cheatsheet
date: "2019-03-10T21:12:03.284Z"
description: Frequently Running Issues in React Native
tags:
  [
    "react-native",
    "reactnative",
    "cheatsheet",
  ]
---

## React Native

#### Clean react-native cache

```
yarn start — —reset-cache
```

#### When React Native Doesn’t Show the changes

```
rm -rf ~/.rncache #clean

rm -rf node_modules

killall -9 node
```

#### If you have duplicate symbols for architecture arm7

```ruby
post_install do |installer|
  installer.pods_project.targets.each do |target|
    if target.name == "React"
      target.remove_from_project
    end
  end
end
```

#### In case you have pod issue

```
pod deintegrate
pod install
```

#### Unlink the libraries

```
react-native unlink library && yarn remove library
```

### iOS

xcode is creating generic xcode archive instead of iOS App Archive

```
Skip install is NO for the main project target
Skip install is YES for framework (sub-projects) targets
Sub-projects need to have Copy Headers in Project not Public
Installation Directory under Deployment is valid (/Applications for example)
```
