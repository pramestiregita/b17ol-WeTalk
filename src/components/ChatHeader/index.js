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
      {!isLoading ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('FriendInfo')}
          style={styled.friendInfo}>
          <View style={styled.imageWrapper}>
            <Thumbnail
              small
              source={
                detail.avatar ? {uri: API_URL.concat(detail.avatar)} : avatar
              }
            />
          </View>

          <View style={styled.nameWrapper}>
            <Text style={styled.name}>{detail.name}</Text>
            <Text style={styled.status}>Online</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('FriendInfo')}
          style={styled.friendInfo}>
          <View style={styled.imageWrapper}>
            <Thumbnail small source={avatar} />
          </View>

          <View style={styled.nameWrapper}>
            <Text style={styled.name} />
            <Text style={styled.status} />
          </View>
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
    backgroundColor: color.header,
  },
  friendInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  nameWrapper: {
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
