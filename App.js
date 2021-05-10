/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';


import Home from './src/screens/Home';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar  />
      <ScrollView
        >
        
        <Home />

      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
