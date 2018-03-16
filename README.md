
# Udacity React Nanodegree Flash Cards Project
---
Native Mobile application (Android or iOS) that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input.

## Getting Started
---
To get started developing right away:

* Install and start the API server
    - `yarn install`
    - `yarn start`

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Frontend File Structure
---
- `/actions` - Actions and Action Creators
- `/components` - React Components (includes styles and navigation)
- `/reducers` - Redux Reducers
- `/utils` - Utility/Helper functions
- `App.js` - Main App Components which includes Routes

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:


## Inspiration and Information

In developing the app there were a number of resources in the form of books and online repositories I referenced in learning however some of the following are notable in that they helped drive certain decisions in how things were done and I found useful hence attributing the sources:

- [Learning React Native](http://shop.oreilly.com/product/0636920085270.do)

- [Learning React Native GitHub Repo](https://github.com/bonniee/learning-react-native)

- [Extreme Decoupling React, Redux, Selectors](http://www.thinkloop.com/article/extreme-decoupling-react-redux-selectors/)

