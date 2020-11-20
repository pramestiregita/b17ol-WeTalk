import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Button} from 'native-base';

import styled from './style';

export default function Login({navigation}) {
  const selectedCountry = {name: 'Indonesia', code: '62'};
  const [phoneNumber, setPhone] = useState(null);

  return (
    <View style={styled.parent}>
      <View style={styled.content}>
        <Text style={styled.title}>Masukkan nomor telepon Anda</Text>
        <Text style={styled.text}>
          WhatsApp akan mengirim SMS untuk memverifikasi nomor telepon Anda.
          <Text style={styled.link}> Berapa nomor telepon saya?</Text>{' '}
        </Text>
        <TouchableOpacity style={styled.countryWrapper}>
          <Text style={styled.countryName}>{selectedCountry.name}</Text>
          <Icon name="caret-down" />
        </TouchableOpacity>
        <View style={styled.numberWrapper}>
          <TextInput
            style={styled.countryCode}
            value={selectedCountry.code}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styled.phoneNumber}
            value={phoneNumber}
            onChangeText={(value) => setPhone(value)}
            placeholder="nomor telepon"
            keyboardType="phone-pad"
          />
        </View>
        <Text style={styled.info}>
          Biaya SMS operator telepon mungkin berlaku
        </Text>
      </View>
      <View style={styled.btnWrapper}>
        <Button style={styled.btn} block>
          <Text style={styled.btnText}>lanjut</Text>
        </Button>
      </View>
    </View>
  );
}
