import React from 'react';
import {useNavigation} from '@react-navigation/native';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Thumbnail} from 'native-base';

import color from '../../assets/color';

import avatar from '../../assets/avatar.jpg';

export default function ChatHeader() {
  const navigation = useNavigation();

  return (
    <View style={styled.parent}>
      <Thumbnail small source={avatar} />

      <TouchableOpacity
        onPress={() => navigation.navigate('FriendInfo')}
        style={styled.nameWrapper}>
        <Text style={styled.name}>Name</Text>
        <Text style={styled.status}>Online</Text>
      </TouchableOpacity>

      <View style={styled.iconWrapper}>
        <IconFa
          style={styled.icon}
          name="video"
          size={20}
          color={color.theme}
        />

        <IconMi
          style={styled.icon}
          name="phone"
          size={20}
          color={color.theme}
        />

        <IconFa
          style={styled.icon}
          name="ellipsis-v"
          size={20}
          color={color.theme}
        />
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    color: color.theme,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
    color: color.theme,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 10,
  },
});
