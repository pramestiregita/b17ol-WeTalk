import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, View} from 'react-native';
import {Text, Thumbnail} from 'native-base';
import {API_URL} from '@env';

import styled from './style';
import color from '../../assets/color';

import avatar from '../../assets/avatar.jpg';

export default function Settings({navigation}) {
  const {data} = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const list = [
    {
      icon: 'key',
      text: 'Akun',
      note: 'Privasi, keamanan, riwayat chat',
    },
    {
      icon: 'chat',
      text: 'Chat',
      note: 'Tema, wallpaper, riwayat chat',
    },
    {
      icon: 'notifications',
      text: 'Notifikasi',
      note: 'Pesan, grup & nada dering panggilan',
    },
    {
      icon: 'data-usage',
      text: 'Penyimpanan dan data',
      note: 'Penggunaan jaringan, unduh otomatis',
    },
    {
      icon: 'help-outline',
      text: 'Bantuan',
      note: 'Pusat Bantuan, hubungi kami, kabijakan privasi',
    },
    {
      icon: 'group',
      text: 'Undang teman',
    },
  ];

  return (
    <View style={styled.parent}>
      {Object.keys(data).length > 0 && (
        <TouchableOpacity
          onPress={() => navigation.navigate('MyProfile')}
          style={styled.header}>
          <Thumbnail
            source={data.avatar ? {uri: API_URL.concat(data.avatar)} : avatar}
          />
          <View style={styled.body}>
            <Text>{data.name}</Text>
            <Text style={styled.note}>Ada</Text>
          </View>
          <Icon name="qrcode" size={25} color={color.header} />
        </TouchableOpacity>
      )}
      <View style={styled.divider} />
      {list.map((i, o) => (
        <View key={o} style={styled.list}>
          {i.icon === 'key' ? (
            <Icon
              style={styled.iconList}
              name={i.icon}
              size={25}
              color={color.header}
            />
          ) : (
            <IconMi
              style={styled.iconList}
              name={i.icon}
              size={25}
              color={color.header}
            />
          )}
          <View style={styled.listText}>
            <Text>{i.text}</Text>
            {i.note ? <Text style={styled.note}>{i.note}</Text> : null}
          </View>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'LOGOUT'});
        }}
        style={styled.list}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
}
