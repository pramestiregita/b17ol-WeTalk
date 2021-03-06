import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

import styled from './style';

import Modal from '../../components/Modal';

import authAction from '../../redux/actions/auth';

const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(12, 'Please insert a valid number')
    .max(13, 'Please insert a valid number')
    .required('Please insert your number'),
});

export default function Login() {
  const selectedCountry = {name: 'Indonesia', code: '62'};

  const {isLoading} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const doLogin = async (values) => {
    try {
      await dispatch(authAction.login(values));
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View style={styled.parent}>
      <Modal visible={isLoading} />

      <Formik
        initialValues={{phoneNumber: ''}}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          Keyboard.dismiss();
          doLogin(values);
        }}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styled.content}>
              <Text style={styled.title}>Masukkan nomor telepon Anda</Text>

              <Text style={styled.text}>
                WeTalk akan mengirim SMS untuk memverifikasi nomor telepon Anda.
                <Text style={styled.link}>
                  {' '}
                  Berapa nomor telepon saya?
                </Text>{' '}
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
                  value={values.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  onSubmitEditing={handleSubmit}
                  placeholder="nomor telepon"
                  keyboardType="phone-pad"
                  autoFocus={true}
                />
              </View>

              {errors.phoneNumber && touched.phoneNumber ? (
                <Text style={[styled.info, styled.error]}>
                  {errors.phoneNumber}
                </Text>
              ) : null}

              <Text style={styled.info}>
                Biaya SMS operator telepon mungkin berlaku
              </Text>
            </View>

            <View style={styled.btnWrapper}>
              <Button onPress={handleSubmit} style={styled.btn} block>
                <Text style={styled.btnText}>lanjut</Text>
              </Button>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
