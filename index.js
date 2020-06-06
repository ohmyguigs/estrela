/**
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import App from './components/App';
import { ColorPallete } from './components/Styles';
import { name as appName } from './app.json';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: ColorPallete.LavenderFloral,
    accent: ColorPallete.MajorelleBlue,
    background: ColorPallete.OrchidCrayola,
    surface: ColorPallete.DarkSlateBlue,
  },
};

export default function Main() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <App colors={ColorPallete} />
      </PaperProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
