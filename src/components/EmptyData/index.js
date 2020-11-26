import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function EmptyData({text}) {
  return (
    <View style={styled.parent}>
      <Text>{text}</Text>
    </View>
  );
}

const styled = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
