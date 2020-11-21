import React from 'react';
import {useNavigation} from '@react-navigation/native';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function ChatHeader() {
  const navigation = useNavigation();

  return (
    <View style={styled.parent}>
      <Text style={styled.title}>WeTalk</Text>
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
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
  },
  icon: {
    marginHorizontal: 15,
  },
  option: {
    padding: 10,
  },
});
