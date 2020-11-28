import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Text, Thumbnail} from 'native-base';
import {API_URL} from '@env';

import styled from './style';
import color from '../../assets/color';

import Modal from '../../components/Modal';

import avatar from '../../assets/avatar.jpg';

export default function Settings({navigation}) {
  const [visible, setVisible] = useState(false);
  const {data} = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const logout = () => {
    setVisible(true);
    dispatch({type: 'LOGOUT'});
  };

  const list = [
    {
      id: 1,
      icon: 'key',
      text: 'Akun',
      note: 'Privasi, keamanan, riwayat chat',
    },
    {
      id: 2,
      icon: 'chat',
      text: 'Chat',
      note: 'Tema, wallpaper, riwayat chat',
    },
    {
      id: 3,
      icon: 'notifications',
      text: 'Notifikasi',
      note: 'Pesan, grup & nada dering panggilan',
    },
    {
      id: 4,
      icon: 'data-usage',
      text: 'Penyimpanan dan data',
      note: 'Penggunaan jaringan, unduh otomatis',
    },
    {
      id: 5,
      icon: 'help-outline',
      text: 'Bantuan',
      note: 'Pusat Bantuan, hubungi kami, kabijakan privasi',
    },
    {
      id: 6,
      icon: 'group',
      text: 'Undang teman',
    },
    {
      id: 7,
      icon: 'sign-out-alt',
      text: 'Logout',
    },
  ];

  return (
    <View style={styled.parent}>
      <Modal visible={visible} />
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
      <FlatList
        data={list}
        renderItem={({item}) =>
          item.text === 'Logout' ? (
            <TouchableOpacity
              onPress={() => logout}
              key={item.id + item.text}
              style={styled.list}>
              <Icon
                style={styled.iconList}
                name={item.icon}
                size={25}
                color="maroon"
              />
              <View style={styled.listText}>
                <Text style={styled.logout}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View key={item.id + item.text} style={styled.list}>
              {item.icon === 'key' ? (
                <Icon
                  style={styled.iconList}
                  name={item.icon}
                  size={25}
                  color={color.header}
                />
              ) : (
                <IconMi
                  style={styled.iconList}
                  name={item.icon}
                  size={25}
                  color={color.header}
                />
              )}
              <View style={styled.listText}>
                <Text>{item.text}</Text>
                {item.note ? (
                  <Text style={styled.note}>{item.note}</Text>
                ) : null}
              </View>
            </View>
          )
        }
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
