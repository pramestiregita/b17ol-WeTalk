import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';

import styled from './style';

import logo from '../../assets/logo.png';

export default function WelcomeScreen({navigation}) {
  useEffect(() => {
    RNBootSplash.hide({});
  }, []);

  return (
    <View style={styled.parent}>
      <Text style={styled.title}>Selamat Datang di WeTalk</Text>
      <Image style={styled.image} source={logo} />
      <View style={styled.footer}>
        <View style={styled.textWrapper}>
          <Text style={styled.text}>
            Baca
            <Text style={styled.link}> Kebijakan Privasi </Text>kami. Ketuk
            "Setuju dan lanjutkan" untuk menerima
            <Text style={styled.link}> Ketentuan Layanan</Text>{' '}
          </Text>
        </View>
        <View style={styled.btnWrapper}>
          <Button
            onPress={() => navigation.navigate('Login')}
            style={styled.btn}
            block>
            <Text style={styled.btnText}>setuju dan lanjutkan</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
