# Yet Another React Native Starter Kit

A boilerplate code for **React Native** application.

## Getting started

For example if you want to create a project called `NewsApp`

```
# Clone the repo into your project folder
$ git clone git@github.com:martindavid/NewsApp.git NewsApp
$ cd NewsApp

# run the renaming script
$ bin/rename NewsApp

# run the setup script
$ bin/setup
```

If everything above run well, then you're ready to go.

### Run Locally

- It's recommended to develop on MacOS because of tighter integration and the iOS simulator has a better user experience than the Android version.

```
# iOS
$ react-native run-ios
$ react-native log-ios

# android (note: requires an android device connected or emulator already running)
$ react-native run-android
$ react-native log-android
```

## What's in it

- Code with typescript
- Component library by [React Native Elements](https://github.com/react-native-training/react-native-elements)
- Icons by [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Navigation](https://github.com/react-navigation/react-navigation)
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler).
  - Used for `swipeable` component
- Bugsnag integration for error reporting
