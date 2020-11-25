import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Thumbnail, Text, List, ListItem, Left, Body, Right} from 'native-base';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

import avatar from '../../assets/avatar.jpg';

export default function ChatList({item}) {
  const {userId} = useSelector((state) => state.profile);
  const friendId =
    item.sender.id !== userId ? item.sender.id : item.recipient.id;

  const navigation = useNavigation();

  return (
    <List key={item.id}>
      <ListItem
        onPress={() => navigation.navigate('ChatRoom', {id: friendId})}
        avatar>
        <Left>
          <TouchableOpacity>
            <Thumbnail source={avatar} />
          </TouchableOpacity>
        </Left>

        <Body>
          {item.sender.id !== userId ? (
            <Text style={styled.name}>{item.sender.name}</Text>
          ) : (
            <Text style={styled.name}>{item.recipient.name}</Text>
          )}
          <Text style={styled.text}>{item.content}</Text>
        </Body>

        <Right style={styled.info}>
          <Text note>{moment(item.createdAt).format('hh:mm')}</Text>
          {item.sender.id === userId ? (
            <Icon name="check" size={20} color="grey" />
          ) : null}
        </Right>
      </ListItem>
    </List>
  );
}

const styled = StyleSheet.create({
  name: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
  },
  info: {
    justifyContent: 'space-between',
  },
});
