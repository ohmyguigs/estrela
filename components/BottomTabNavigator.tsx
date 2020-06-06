import * as React from 'react';
// import { Text } from 'react-native-paper';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ColorPallete } from './Styles';

const NAVIGATION_ICONS_SIZE = 22;

const LoopsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Loops! soon...</Text>
  </View>
);
const MetronomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Metronome! soon...</Text>
  </View>
);
const DevicesScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Devices! soon...</Text>
  </View>
);
const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings! soon...</Text>
  </View>
);

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled
      shifting={false}
      initialRouteName="Loops"
      activeColor={ColorPallete.KeyLime}
      inactiveColor={ColorPallete.LavenderFloral}
      barStyle={{ backgroundColor: ColorPallete.DarkSlateBlue }}>
      <Tab.Screen
        name="Loops"
        options={{
          tabBarLabel: 'Loops',
          tabBarIcon: ({ color }) => (
            <Icon name="sync" color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
        }}
        component={LoopsScreen}
      />
      <Tab.Screen
        name="Metronome"
        options={{
          tabBarLabel: 'Metronome',
          tabBarIcon: ({ color }) => (
            <Icon name="metronome" color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
        }}
        component={MetronomeScreen}
      />
      <Tab.Screen
        name="Devices"
        options={{
          tabBarLabel: 'Devices',
          tabBarIcon: ({ color }) => (
            <Icon name="usb" color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
        }}
        component={DevicesScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="settings" color={color} size={NAVIGATION_ICONS_SIZE} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
