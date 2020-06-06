/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import BottomTabNavigator from './components/BottomTabNavigator';

const App: () => React.ReactNode = () => {
  return (
    <>
      <View>
        <BottomTabNavigator />
      </View>
    </>
  );
};

export default App;
