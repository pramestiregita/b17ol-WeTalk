import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';

import color from '../../assets/color';

export default function ChatBubble({item}) {
  const loginId = 1;

  const bubble = () => {
    if (item.senderId === loginId) {
      if (item.content.length < 25) {
        return styled.outgoingSmall;
      } else {
        return styled.outgoingBig;
      }
    } else {
      if (item.content.length < 25) {
        return styled.incomingSmall;
      } else {
        return styled.incomingBig;
      }
    }
  };

  return (
    <View key={item.id} style={bubble()}>
      <Text style={styled.content}>{item.content}</Text>
      <Text style={styled.time}>{item.time}</Text>
    </View>
  );
}

const styled = StyleSheet.create({
  incomingSmall: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '30%',
    borderRadius: 10,
    alignItems: 'center',
  },
  incomingBig: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  outgoingSmall: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: color.outChat,
    flexDirection: 'row',
    width: '30%',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  outgoingBig: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: color.outChat,
    flexDirection: 'row',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  content: {
    flex: 1,
    fontSize: 14,
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: 'grey',
  },
});
