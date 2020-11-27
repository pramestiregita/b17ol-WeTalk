import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import color from '../../assets/color';

import WelcomeScreen from '../WelcomeScreen';
import Login from '../Login';
import SetProfile from '../SetProfile';
import ChatRoom from '../ChatRoom';
import FriendInfo from '../FriendInfo';
import Settings from '../Settings';
import MyProfile from '../MyProfile';
import Info from '../Info';
import Contact from '../Contact';

import Tabs from './Tabs';

import MainHeader from '../../components/MainHeader';
import ChatHeader from '../../components/ChatHeader';
import ContactHeader from '../../components/ContactHeader';

const Stack = createStackNavigator();

export default function Main() {
  const {isLogin} = useSelector((state) => state.auth);
  const {setProfile} = useSelector((state) => state.profile);

  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : !setProfile ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="SetProfile"
            component={SetProfile}
          />
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
            options={({navigation}) => ({
              headerStyle: {
                elevation: 0,
                backgroundColor: color.header,
              },
              headerTitle: (props) => <ChatHeader {...props} />,
              headerLeft: () => (
                <HeaderBackButton
                  onPress={() => navigation.navigate('Chat')}
                  tintColor="white"
                />
              ),
            })}
            name="ChatRoom"
            component={ChatRoom}
          />

          <Stack.Screen
            options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white',
            }}
            name="FriendInfo"
            component={FriendInfo}
          />

          <Stack.Screen
            options={{
              title: 'Setelan',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: color.header},
            }}
            name="Settings"
            component={Settings}
          />

          <Stack.Screen
            options={{
              title: 'Profil',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: color.header},
            }}
            name="MyProfile"
            component={MyProfile}
          />

          <Stack.Screen
            options={{
              title: 'Info',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: color.header},
            }}
            name="Info"
            component={Info}
          />

          <Stack.Screen
            options={{
              headerStyle: {
                elevation: 0,
                backgroundColor: color.header,
              },
              headerTintColor: 'white',
              headerTitle: (props) => <ContactHeader {...props} />,
              headerLeft: false,
            }}
            name="Contact"
            component={Contact}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
