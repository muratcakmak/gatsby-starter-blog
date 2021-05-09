---
title: My first year at Hims & Hers
date: "2019-11-15T21:12:03.284Z"
description: A retrospective of my first year at Hims & Hers where I grew as an engineer, leader, and human a ton
tags:
  [
    "storybook",
    "react",
    "reactnative",
    "frontend",
    "monorepo",
    "yarn",
    "workspaces",
  ]
---

## Before I started

### Interview

The interview process was smooth. Everybody I met along the way seemed so nice and driven by the company's mission. I like it.

### Communication

Before I signed anything I decided to talk with the Frontend Lead. I think it was one of the best decisions I have made.

Setting expectations are the way to go. Once you talk about your goals, you are one-nill ahead. Your manager or coworkers around you will help you. If you don't have any goal in your mind, you might be ended up wandering and complaining about why you didn't hit the goals while others did.

The art of figuring out how your personal goals can align with the company's priorities and needs is

### CX

When I started store frontend had enough engineers to go. So I started to work on CX which stands for Customer Experience. CX is an internal tool used primarily by support people. That's why it has to function. I doesn't have to be the best looking website and its UX can be tolerant because few people within the company uses it.

Product is always first. Having a decent product brings people to your platform. Supporting them after their first interaction is another story and its volume is pretty low compared to people who visits your website. That's the very same reason why I like internal tools more. It gives more liberty to technically innovate.

I took this as a good opportunity to technically innovate. I am on twitter and I follow folks in React Community. I wanted to use bleeding edge React not the React from two years ago. If you work on upgrading your node_modules, it is not always pleasant. The project was not mantained properly due to the time constraint. Product requirements were creating tech debt. Actually, tech debt is a good thing if you're looking from business/product perspective. It is not the best as an engineer. It could slow you down and can cause more harm than good while you were working on new shiny feature.

I went ahead and upgraded one of each packages in package.json file. Some of them are straightforward but most of them required code changes. CLI was my one and only friend during the whole journey. The projec wasn't compiled properly for two days. It took me two days to bring dependencies from late 2017 to 2019 and beyond.

I was also pretty considered about the performance. Even though it is an internal tool, it should be as performant as possible since it was running on Windows machine with old Intel CPUs in general. I applied techniques that I learned to improve loading times. Codesplitting and caching redux into local storage were huge boost to performance. I tried to diagnose bottlenecks using profiler and mitigated unnecessary rerenders.

I will mention linting and prettier next which increased the developer velocity and knowledge base.

### Linting and Beatufiers

I was fascinated by the power of linting when I first transitioned to web development. A good linter can be your virtual tutor while you are learning new technology. My week one at hims, I realized that we didn't have company wide linter rules which were understandable. The project wasn't sharing standards was a little bit tiring for engineers who switch between projects.

Around the time, Github announced the GitHub npm registry. It always you to create private npm packages with the convenience of Github. I decided to create a library with linter rules based on Airbnb. It escalated quickly. I created 3 libraries in total: core-lint, node-lint, and browser-lint linter rules. Core-lint includes the base rules for JS projects. Node-lint and browser-lint support their platform-specific rules on top of core-lint.

I wanted to create a team-wide initiative and pitched it to other engineers. People seem to like it. I adopted it to many CX and EMR and my PRs got so humongous.

### Hermes

While I was working on CX, I had a conversation with another engineer about the upcoming impossible project. Project Hermes!

We had to launch Hims & Hers to 50 states of the United States till the end of the year. It was a hard deadline which we had to meet. It was crazy.

I had an opportunity to build video chat applications before. I was familiar with Twilio and its APIs. The challenge was building very similar video chat/audio call components on two different platforms.

Earlier that month, I aimed to create a component library. My goal was to codeshare between multiple projects within the company. I did some research and it turned out TypeScript was getting pretty popular. I started a component library called `Cactus` because the office was full of cacti. I create the core of the library and deployed it to the Github npm registry and I went to work on something else.

The necessity of supporting two different projects with Video Chat/Voice Chat enabled lighted a bulb in my mind. I could leverage the Cactus library. It seems like a good use case. There were examples of other libraries I created for linting.

I turned out it was a good decision. I integrated Twilio SDK into the Cactus and exported video chat example from Twilio. It took a day to tweak how it would work with Typescript because Twilio docs/example projects wouldn't support Typescript back then. They didn't even have good examples with React Hooks. I was lucky to setup storybooks earlier in the project. Storybook helps with developer velocity. Especially working on P2P video chat application, it is nice to have two Storybook window is open. You don't have to deal with other aspects of consumer projects(which consumes your library). The isolation helps the developer to focus on what they are working on.

Twilio is pretty notorious with not having UI components for basic interactions in the most video chat applications such as hang up, mute button, or adjusting camera/audio resorce. They provided the infrastructure and one or two examples and the developer should come up with the rest. I don't think it is the best developer experience. I wish twilio works with Netlify on their DX.

I was able to spot bugs pretty quickly and fix them along the way. The only thing bothers me the most was turning off the camera when the user leaves the room. Twilio SDK has many listeners and the documentation wasn't good enough to provide a straight answer to this pretty common feature.

The other thing was the aspect ratio. The feedback of the user and the actual stream sent should be aligned. I had a chance to examine many video chat applications ranging from Apple Facetime to Facebook Messenger and they are not doing the best here either. There is too many fragmentation across the devices so it is no free lunch here.

### Mobile clients

My coworker was also working on mobile application earlier. I was intrigued by the idea of implementing video chat into mobile apps. They are built with React Native and I worked with native Twilio SDK earlier.

### Frontend Guild

I was so pumped to talk about my findings and frontend specific technologies and it led me to propose frontend guild to discuss topics. My coworkers embraced it and we have frontend guild meetings scheduled for a year and it was a really good learning opportunity for the whole frontend team.

At first, we were shy to find a topic to talk but it has gotten some momentum recently so we have so much to talk.

I had a chance to talk about Linters, Typescript, and Github Actions and had a chance to listen talk about design systems, performance, etc.

### EMR

I was playing with the idea of working with React Native. Working on Hermes project and adding video chat to React Native reminded me the taste of mobile development. I find mobile development pretty elegant. There is not many mobile projects that I could work on.

I think React Native has figured out how to declare UI. It closes the gap between mobile and traditional web development. Mobile technologies developed in late 2000s and they matured around 2015. I think Apple did a great job. Web technologies also revolutionez a lot during that time. Facebook brought React into the game and component based approached influenced UI development dramatically.

React Native plays a role to bring based practices from mobile and web development and melts them into its pot. Power of declaratived/functional approach and clean architecture invented recently by mobile development platforms make a great duo.

React Native is also brother of React. React is basically a function which takes data and outputs a UI. It is declarative and reactive. It is efficient thanks to indirect DOM manipulation and it is platform agnostic.
