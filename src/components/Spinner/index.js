import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Spinner} from 'native-base';

import color from '../../assets/color';

export default function index() {
  return (
    <View style={styled.parent}>
      <Spinner color={color.title} />
    </View>
  );
}

const styled = StyleSheet.create({
  parent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
