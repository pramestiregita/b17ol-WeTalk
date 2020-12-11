import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Thumbnail, Text, View} from 'native-base';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {API_URL} from '@env';

import messageAction from '../../redux/actions/message';

import avatar from '../../assets/avatar.jpg';
import color from '../../assets/color';

export default function ChatList({item}) {
  const {token} = useSelector((state) => state.auth);
  const {userId} = useSelector((state) => state.profile);
  const friendId =
    item.sender.id !== userId ? item.sender.id : item.recipient.id;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const seeDetails = async () => {
    await dispatch(messageAction.getMsg(token, friendId));
    navigation.navigate('ChatRoom', {id: friendId});
  };

  return (
    <View style={styled.parent}>
      <TouchableOpacity onPress={() => seeDetails()}>
        <View style={styled.list}>
          <TouchableOpacity>
            <Thumbnail
              style={styled.image}
              source={
                item.sender.id !== userId
                  ? item.sender.avatar
                    ? {uri: API_URL.concat(item.sender.avatar)}
                    : avatar
                  : item.recipient.avatar
                  ? {uri: API_URL.concat(item.recipient.avatar)}
                  : avatar
              }
            />
          </TouchableOpacity>

          <View style={styled.devider}>
            <View style={styled.body}>
              {item.sender.id !== userId ? (
                <Text style={styled.name}>{item.sender.name}</Text>
              ) : (
                <Text style={styled.name}>{item.recipient.name}</Text>
              )}
              <Text style={styled.text}>
                {item.content.length > 30 ? item.preview : item.content}
              </Text>
            </View>

            <View style={styled.info}>
              <Text note>{moment(item.createdAt).format('hh:mm A')}</Text>
              {item.sender.id === userId ? (
                item.isRead ? (
                  <Icon
                    style={styled.icon}
                    name="done-all"
                    size={20}
                    color={color.linkColor}
                  />
                ) : (
                  <Icon
                    style={styled.icon}
                    name="done-all"
                    size={20}
                    color="grey"
                  />
                )
              ) : !item.isRead ? (
                <View style={styled.badge}>
                  <Text />
                </View>
              ) : null}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styled = StyleSheet.create({
  parent: {
    paddingHorizontal: 10,
    marginTop: 5,
    height: 65,
    justifyContent: 'center',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
  },
  devider: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    height: '100%',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    marginRight: 5,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
  },
  info: {
    alignItems: 'flex-end',
  },
  icon: {
    marginTop: 5,
  },
  badge: {
    backgroundColor: color.btnColor,
    width: 14,
    height: 14,
    borderRadius: 7,
    marginTop: 5,
  },
});
