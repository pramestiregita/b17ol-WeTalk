import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Chat from '../Chat';
import Status from '../Status';
import Calls from '../Calls';

import color from '../../assets/color';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontWeight: 'bold'},
        indicatorStyle: {backgroundColor: color.theme, height: 3},
        style: {elevation: 2, backgroundColor: color.header},
        activeTintColor: color.theme,
      }}>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}
