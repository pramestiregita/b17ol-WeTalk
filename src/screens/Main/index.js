import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import color from '../../assets/color';

import WelcomeScreen from '../WelcomeScreen';
import Login from '../Login';
import Chat from '../Chat';
import Status from '../Status';
import Calls from '../Calls';
import ChatRoom from '../ChatRoom';

import MainHeader from '../../components/MainHeader';
import ChatHeader from '../../components/ChatHeader';
import {useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
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
};

export default function Main() {
  const {isLogin} = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerStyle: {
                elevation: 0,
                backgroundColor: color.header,
              },
              headerTitle: (props) => <MainHeader {...props} />,
            }}
            name="Main"
            component={Tabs}
          />

          <Stack.Screen
            options={{
              headerTitle: (props) => <ChatHeader {...props} />,
              headerStyle: {
                backgroundColor: color.header,
              },
              headerTintColor: color.theme,
            }}
            name="ChatRoom"
            component={ChatRoom}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}