import React from 'react';
import {StyleSheet} from 'react-native';
import {Thumbnail, Text, List, ListItem, Left, Body, Right} from 'native-base';

import avatar from '../../assets/avatar.jpg';

export default function ChatList({item}) {
  return (
    <List>
      <ListItem onPress={() => console.log('pressed')} avatar>
        <Left>
          <Thumbnail source={avatar} />
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
