import React from 'react';
import {useNavigation} from '@react-navigation/native';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import color from '../../assets/color';

export default function ChatHeader({total}) {
  const navigation = useNavigation();

  return (
    <View style={styled.parent}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styled.iconWrapper}>
        <IconFa name="arrow-left" size={20} color="white" />
      </TouchableOpacity>
      <View style={styled.titleWrapper}>
        <Text style={styled.title}>Pilih kontak</Text>
        <Text style={styled.subtitle}>{total} kontak</Text>
      </View>
      <IconFa style={styled.icon} name="search" size={20} color="white" />
      <Menu>
        <MenuTrigger>
          <IconFa
            style={styled.icon}
            name="ellipsis-v"
            size={20}
            color="white"
          />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption>
            <Text style={styled.option}>Grup baru</Text>
          </MenuOption>
          <MenuOption>
            <Text style={styled.option}>Siaran baru</Text>
          </MenuOption>
          <MenuOption>
            <Text style={styled.option}>WeTalk Web</Text>
          </MenuOption>
          <MenuOption>
            <Text style={styled.option}>Pesan berbintanng</Text>
          </MenuOption>
          <MenuOption onSelect={() => navigation.navigate('Settings')}>
            <Text style={styled.option}>Setelan</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
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
  iconWrapper: {
    width: 50,
    alignItems: 'center',
    marginRight: 20,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    color: 'white',
    fontSize: 13,
  },
  icon: {
    marginHorizontal: 15,
  },
  option: {
    padding: 10,
  },
});
