import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Thumbnail} from 'native-base';

import {API_URL} from '@env';

import color from '../../assets/color';

import avatar from '../../assets/avatar.jpg';

export default function ChatHeader({item}) {
  const {isLoading, detail} = useSelector((state) => state.friend);

  const navigation = useNavigation();

  return (
    <View style={styled.parent}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styled.goBack}>
        <IconFa name="arrow-left" size={20} color={color.theme} />

        {!isLoading ? (
          <Thumbnail
            small
            source={
              detail.avatar ? {uri: API_URL.concat(detail.avatar)} : avatar
            }
          />
        ) : (
          <Thumbnail small source={avatar} />
        )}
      </TouchableOpacity>

      {!isLoading ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('FriendInfo')}
          style={styled.nameWrapper}>
          <Text style={styled.name}>{detail.name}</Text>
          <Text style={styled.status}>Online</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('FriendInfo')}
          style={styled.nameWrapper}>
          <Text style={styled.name} />
          <Text style={styled.status} />
        </TouchableOpacity>
      )}

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
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: color.header,
  },
  goBack: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
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
