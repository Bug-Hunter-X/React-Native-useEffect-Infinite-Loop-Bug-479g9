# React Native useEffect Infinite Loop Bug

This repository demonstrates a common error in React Native applications involving the `useEffect` hook.  The example code exhibits an infinite loop due to the absence of a dependency array in the `useEffect` call, causing the app to crash.

## Bug Description

The `useEffect` hook in React Native, when used without a dependency array, runs after every render. In the provided example, the effect attempts to increment the `count` state, triggering a re-render, which in turn triggers the effect again, resulting in an infinite loop.

## Solution

The solution involves providing an empty dependency array (`[]`) to the `useEffect` hook. This ensures that the effect runs only once after the initial render, resolving the infinite loop.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` (or `npx react-native run-ios`) to start the app.
4. Observe the app crashing or displaying unexpected behavior.