import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Thumbnail, Text, List, ListItem, Left, Body, Right} from 'native-base';

import avatar from '../../assets/avatar.jpg';

export default function ChatList({item}) {
  const navigation = useNavigation();

  return (
    <List key={item.id + item.name}>
      <ListItem onPress={() => navigation.navigate('ChatRoom')} avatar>
        <Left>
          <TouchableOpacity>
            <Thumbnail source={avatar} />
          </TouchableOpacity>
        </Left>

        <Body>
          <Text style={styled.name}>{item.name}</Text>
          <Text style={styled.text}>{item.text}</Text>
        </Body>

        <Right>
          <Text note>{item.time}</Text>
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
});
