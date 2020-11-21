import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, Image, TextInput} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

import styled from './style';

import add from '../../assets/addpict.png';

const profileSchema = Yup.object().shape({
  fullName: Yup.string().required('Please insert your name'),
});

export default function SetProfile() {
  const onSubmit = (data) => {
    data = {
      ...data,
      image: null,
    };
    console.log(data);
  };

  return (
    <Formik
      initialValues={{fullName: ''}}
      validationSchema={profileSchema}
      onSubmit={(values) => onSubmit(values)}>
      {({handleBlur, handleChange, handleSubmit, values, errors}) => (
        <View style={styled.parent}>
          <View style={styled.contentWrapper}>
            <Text style={styled.title}>Info Profil</Text>
            <Text style={styled.text}>
              Mohon berikan nama dan foto profil (optional) Anda
            </Text>
            <Image style={styled.image} source={add} />
            <View style={styled.inputWrapper}>
              <TextInput
                style={styled.input}
                placeholder="Ketik nama Anda di sini"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              <Icon style={styled.emoji} name="laugh" size={20} />
            </View>
          </View>
          <View style={styled.btnWrapper}>
            <Button onPress={handleSubmit} style={styled.btn} block>
              <Text style={styled.btnText}>lanjut</Text>
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
}
