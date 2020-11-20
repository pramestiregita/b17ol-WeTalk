import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import List from '../../components/ChatList';

export default function Chat() {
  const chatList = [
    {
      id: 1,
      name: 'Adib',
      text: 'How are you?',
      time: '13.40',
    },
    {
      id: 2,
      name: 'Nur',
      text: 'Hi!',
      time: '12.40',
    },
  ];

  return (
    <View style={styled.parent}>
      <FlatList
        data={chatList}
        renderItem={({item}) => <List item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styled = StyleSheet.create({
  parent: {
    flex: 1,
  },
});
