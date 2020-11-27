/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Alert,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import RNBootSplash from 'react-native-bootsplash';

import {API_URL, LIMIT_FILE} from '@env';

import styled from './style';
import profileAction from '../../redux/actions/profile';

import add from '../../assets/addpict.png';

const profileSchema = Yup.object().shape({
  name: Yup.string().required('Please insert your name'),
});

export default function SetProfile() {
  const [imageSource, setImage] = useState(null);
  const [imageUri, setUri] = useState('');

  const {token} = useSelector((state) => state.auth);
  const {data, isSuccess} = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(profileAction.getProfile(token));
  };

  useEffect(() => {
    getData();
    RNBootSplash.hide({});
  }, []);

  const selectImage = () => {
    const options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
      noData: true,
      mediaType: 'photo',
    };

    ImagePicker.showImagePicker(options, async (response) => {
      if (response.error) {
        Alert.alert('Try again later!');
      } else if (response.fileSize > LIMIT_FILE) {
        Alert.alert('File is too big');
      } else {
        setImage(response);
        setUri(response.uri);
      }
    });
  };

  const onSubmit = (value) => {
    const form = new FormData();

    form.append('name', value.name);

    if (imageSource) {
      form.append('avatar', {
        uri: imageSource.uri,
        name: imageSource.fileName,
        type: imageSource.type,
      });
    }

    dispatch(profileAction.setProfile(token, form));
  };

  useEffect(() => {
    isSuccess && getData();
  }, [isSuccess]);

  return (
    Object.keys(data).length > 0 && (
      <Formik
        initialValues={{name: data.name}}
        validationSchema={profileSchema}
        onSubmit={(values) => onSubmit(values)}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styled.parent}>
            <View style={styled.contentWrapper}>
              <Text style={styled.title}>Info Profil</Text>
              <Text style={styled.text}>
                Mohon berikan nama dan foto profil (optional) Anda
              </Text>
              <TouchableOpacity onPress={() => selectImage()}>
                <Image
                  style={styled.image}
                  source={
                    imageSource
                      ? {uri: imageUri}
                      : data.avatar
                      ? {uri: API_URL.concat(data.avatar)}
                      : add
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

              {errors.name && touched.name ? (
                <Text style={styled.error}>{errors.name}</Text>
              ) : null}
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
