import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'native-base';

import styled from './style';

import logo from '../../assets/logo.png';

export default function WelcomeScreen() {
  return (
    <View style={styled.parent}>
      <Text style={styled.title}>Selamat Datang di WeTalk</Text>
      <Image style={styled.image} source={logo} />
      <View style={styled.footer}>
        <View style={styled.textWrapper}>
          <Text style={styled.text}>Baca </Text>
          <Text style={styled.link}>Kebijakan Privasi</Text>
          <Text style={styled.text}> kami. </Text>
          <Text style={styled.text}>Ketuk "Setuju dan lanjutkan"</Text>
          <Text style={styled.text}>untuk menerima </Text>
          <Text style={styled.link}>Ketentuan Layanan</Text>
        </View>
        <View style={styled.btnWrapper}>
          <Button style={styled.btn} block>
            <Text style={styled.btnText}>setuju dan lanjutkan</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
