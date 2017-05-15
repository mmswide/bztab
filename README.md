# Getting Started

The instructions are a bit different depending on your development operating system, and whether you want to start developing for iOS or Android.

This is link for installing dependencies and running project: https://facebook.github.io/react-native/docs/getting-started.html#testing-your-react-native-installation

# Build for Android:

You need to manually create the bundle for a debug build.

- Bundle debug build:
	react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
- Create debug build:
	cd android
	./gradlew assembleDebug

This gives you the output of 2 apk files in you projectfolder/android/app/build/outputs/apk

# Running on iOS Device:

You need to open project in XCode v7.0 or upper
In XCode select your tablet as build target and press "Build and run"
