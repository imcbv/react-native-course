// Index.ios.js - place code in here for ios

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Just a test!'} />
    <AlbumList />
  </View>
);

// Render the component to the device
// first argument is the app name, must match with project folder name
// the second argument is the first component that gets rendered
AppRegistry.registerComponent('albums', () => App);
