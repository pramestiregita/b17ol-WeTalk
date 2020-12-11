/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNBootSplash from 'react-native-bootsplash';
import PushNotification from 'react-native-push-notification';

import messageAction from '../../redux/actions/message';
import authAction from '../../redux/actions/auth';
import profileAction from '../../redux/actions/profile';
import socket from '../../helpers/socket';

import color from '../../assets/color';

import List from '../../components/ChatList';

PushNotification.createChannel(
  {
    channelId: 'notif',
    channelName: 'Notif channel',
    channelDescription: 'Test',
    soundName: 'default',
    importance: 4,
    vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`),
);

const emptyData = () => {
  return (
    <View style={styled.emptyData}>
      <Text>There is no message</Text>
    </View>
  );
};

export default function Chat({navigation}) {
  const loading = false;

  const {token, refreshToken} = useSelector((state) => state.auth);
  const {data, pageInfo, alertMsg} = useSelector((state) => state.message);
  const {userId, data: user} = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(messageAction.getAll(token));
  };

  useEffect(() => {
    getData();
    relogin();
    RNBootSplash.hide({});
    socket.on(userId, () => {
      getData();
    });
  }, []);

  useEffect(() => {
    PushNotification.configure({
      onRegister: async (tokenDevice) => {
        const {deviceToken} = user;
        const {token: devToken} = tokenDevice;

        if (deviceToken !== devToken) {
          const value = {token: devToken};
          await dispatch(profileAction.addDeviceToken(token, value));
          await dispatch(profileAction.getProfile(token));
        }
      },
      onNotification: (notif) => {
        PushNotification.localNotification({
          channelId: 'notif',
          title: notif.title,
          message: notif.message,
        });
      },
      onRegistrationError: (err) => {
        console.error(err.message, err);
      },
    });
  }, []);

  const nextPage = async () => {
    if (pageInfo.nextLink) {
      await dispatch(messageAction.nextAll(token, pageInfo.nextLink));
    }
  };

  const relogin = async () => {
    if (alertMsg === 'Unauthorized') {
      await dispatch(authAction.relogin({refreshToken}));
      getData();
    }
  };

  useEffect(() => {
    if (alertMsg === 'Unauthorized') {
      dispatch(authAction.relogin({refreshToken}));
      getData();
    }
  }, [alertMsg]);

  return (
    <View style={styled.parent}>
      <FlatList
        data={data}
        renderItem={({item}) => <List item={item} />}
        keyExtractor={(item) => item.id.toString().concat(item.sender.name)}
        onEndReached={nextPage}
        onEndReachedThreshold={(0, 5)}
        refreshing={loading}
        onRefresh={getData}
        ListEmptyComponent={emptyData}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Contact')}
        style={styled.iconWrapper}>
        <Icon name="chat" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styled = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
    marginBottom: 10,
  },
  iconWrapper: {
    position: 'absolute',
    backgroundColor: color.btnColor,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    right: 20,
    elevation: 5,
  },
  emptyData: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    marginTop: 20,
  },
});
