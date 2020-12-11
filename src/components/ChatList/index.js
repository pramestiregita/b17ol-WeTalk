import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Thumbnail,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  View,
} from 'native-base';
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
    <List key={item.id}>
      <ListItem onPress={() => seeDetails()} avatar>
        <Left>
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
        </Left>

        <Body>
          {item.sender.id !== userId ? (
            <Text style={styled.name}>{item.sender.name}</Text>
          ) : (
            <Text style={styled.name}>{item.recipient.name}</Text>
          )}
          <Text style={styled.text}>
            {item.content.length > 30 ? item.preview : item.content}
          </Text>
        </Body>

        <Right style={styled.info}>
          <Text note>{moment(item.createdAt).format('hh:mm A')}</Text>
          {item.sender.id === userId ? (
            item.isRead ? (
              <Icon name="done-all" size={20} color={color.linkColor} />
            ) : (
              <Icon name="done-all" size={20} color="grey" />
            )
          ) : !item.isRead ? (
            <View style={styled.badge}>
              <Text />
            </View>
          ) : null}
        </Right>
      </ListItem>
    </List>
  );
}

const styled = StyleSheet.create({
  image: {
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
  },
  info: {
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: color.btnColor,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
