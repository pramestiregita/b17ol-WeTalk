import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {API_URL} from '@env';

import styled from './style';
import profileAction from '../../redux/actions/profile';

import add from '../../assets/addpict.png';

const profileSchema = Yup.object().shape({
  name: Yup.string().required('Please insert your name'),
});

export default function SetProfile() {
  const {token} = useSelector((state) => state.auth);
  const {data} = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(profileAction.getProfile(token));
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = (value) => {
    console.log(value);
    // value = {
    //   ...value,
    //   image: null,
    // };
    // dispatch(profileAction.setProfile(value));
  };

  return (
    Object.keys(data).length > 0 && (
      <Formik
        initialValues={{name: data.name}}
        validationSchema={profileSchema}
        onSubmit={(values) => onSubmit(values)}>
        {({handleBlur, handleChange, handleSubmit, values, errors}) => (
          <View style={styled.parent}>
            {console.log(data)}
            <View style={styled.contentWrapper}>
              <Text style={styled.title}>Info Profil</Text>
              <Text style={styled.text}>
                Mohon berikan nama dan foto profil (optional) Anda
              </Text>
              <TouchableOpacity>
                <Image
                  style={styled.image}
                  source={
                    data.avatar ? {uri: API_URL.concat(data.avatar)} : add
                  }
                />
              </TouchableOpacity>
              <View style={styled.inputWrapper}>
                <TextInput
                  style={styled.input}
                  placeholder="Ketik nama Anda di sini"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  onSubmitEditing={handleSubmit}
                  value={values.name}
                  autoFocus={true}
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
    )
  );
}
