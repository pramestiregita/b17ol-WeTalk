import React from 'react';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';

export default function ChatHeader() {
  return (
    <View style={styled.parent}>
      <Text style={styled.title}>WeTalk</Text>
      <IconFa style={styled.icon} name="search" size={20} color="white" />
      <IconFa style={styled.icon} name="ellipsis-v" size={20} color="white" />
    </View>
  );
}

const styled = StyleSheet.create({
  parent: {
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
  },
  icon: {
    marginLeft: 25,
  },
});
