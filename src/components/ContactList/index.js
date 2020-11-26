import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Thumbnail, Text, List, ListItem, Left, Body} from 'native-base';

import {API_URL} from '@env';

import avatar from '../../assets/avatar.jpg';

export default function ChatList({item}) {
  const navigation = useNavigation();

  return (
    <List>
      <ListItem
        onPress={() => navigation.navigate('ChatRoom', {id: item.id})}
        avatar>
        <Left>
          <TouchableOpacity>
            <Thumbnail
              style={styled.image}
              source={item.avatar ? {uri: API_URL.concat(item.avatar)} : avatar}
            />
          </TouchableOpacity>
        </Left>

        <Body>
          <Text style={styled.name}>{item.name}</Text>
          <Text style={styled.text}>Ada</Text>
        </Body>
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
});
