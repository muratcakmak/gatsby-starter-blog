---
title: Pretty Opinionated Introduction to React Native for React Developers
date: "2021-03-14T21:12:03.284Z"
description: What do I need to do if I start my first React Native project as React Developer
---

## Pretty Opinionated Introduction to React Native for React Developers


- Hooks
    - They are the same. New React versions are tend to be adapted later on React Native so some bleeding edge React library features may not be available on the version of React Native you start.
- JSX tags are slightly different: View instead of div, Text instead of h1
    - This makes React Native more React than pure HTML because component names start with capital letter
    - Gotchas: 
        - The order of Views determines z-indexes
        - It can’t render arbitrary strings. String needs to be wrapped in Text component
- Navigation 
    - Mobile has different UX than web. Instead of pages, there are screens and passing value from one screen to another is accomplished by props. I would suggest react-navigation
- Styling
    - Stylesheet API is way to go. If you’re familiar with styled-components, you can use them here.
- Layout
    - React Native styling relies heavily on flex-box and flex-direction is column as oppose to the web.
- Data Layer
    - Redux, redux-saga, thunk, axios, fetch, etc. Most of the popular libraries with thousands of users work perfect on React Native


Advanced
- Want to have more control so write/alter Native Modules in Java/Kotlin and Objective-C/Swift
- React Native have most of the API available on the browser but some might differ. For example: Intl methods for parsing dates are missing. 
