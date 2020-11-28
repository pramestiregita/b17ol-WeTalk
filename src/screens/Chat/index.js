/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNBootSplash from 'react-native-bootsplash';

import messageAction from '../../redux/actions/message';
import socket from '../../helpers/socket';

import color from '../../assets/color';

import List from '../../components/ChatList';
import EmptyData from '../../components/EmptyData';

export default function Chat({navigation}) {
  const loading = false;

  const {token} = useSelector((state) => state.auth);
  const {data, pageInfo, isLoading} = useSelector((state) => state.message);
  const {userId} = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(messageAction.getAll(token));
  };

  useEffect(() => {
    getData();
    RNBootSplash.hide({});
    socket.on(userId, () => {
      getData();
    });
    return () => {
      socket.close();
    };
  }, []);

  const nextPage = async () => {
    if (pageInfo.nextLink) {
      await dispatch(messageAction.nextAll(token, pageInfo.nextLink));
    }
  };

  return (
    <View style={styled.parent}>
      {!isLoading &&
        (Object.keys(data).length > 0 ? (
          <FlatList
            data={data}
            renderItem={({item}) => <List item={item} />}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={nextPage}
            onEndReachedThreshold={(0, 5)}
            refreshing={loading}
            onRefresh={getData}
          />
        ) : (
          <EmptyData text="There is no message" />
        ))}
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
});
