// Index.android.js - place code in here for android

// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';

// Create a Component
const App = () => (
  <Header />
);

// Render the component to the device
// first argument is the app name, must match with project folder name
// the second argument is the first component that gets rendered
AppRegistry.registerComponent('albums', () => App);
