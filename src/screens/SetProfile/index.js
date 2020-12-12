/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import RNBootSplash from 'react-native-bootsplash';

import {API_URL, LIMIT_FILE} from '@env';

import styled from './style';
import profileAction from '../../redux/actions/profile';

import toast from '../../helpers/toast';
import Modal from '../../components/Modal';

import add from '../../assets/addpict.png';

const profileSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please insert your name')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
});

export default function SetProfile() {
  const {token} = useSelector((state) => state.auth);
  const {data, isLoading} = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      await dispatch(profileAction.getProfile(token));
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
    RNBootSplash.hide({});
  }, []);

  const selectImage = () => {
    const options = {
      title: 'Silahkan pilih gambar',
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
        toast('Coba lagi nanti!');
      } else if (response.fileSize > LIMIT_FILE) {
        toast('Ukuran file terlalu besar');
      } else if (response.didCancel) {
        toast('Tidak ada gambar terpilih');
      } else {
        const form = new FormData();

        form.append('avatar', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });

        try {
          await dispatch(profileAction.changeAva(token, form));
          getData();
        } catch (e) {
          console.log(e.message);
        }
      }
    });
  };

  const onSubmit = async (body) => {
    try {
      Keyboard.dismiss();
      await dispatch(profileAction.changeName(token, body));
      getData();
    } catch (e) {
      console.log(e.message);
    }
  };

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
            <Modal visible={isLoading} />

            <View style={styled.contentWrapper}>
              <Text style={styled.title}>Info Profil</Text>
              <Text style={styled.text}>
                Mohon berikan nama dan foto profil (optional) Anda
              </Text>
              <TouchableOpacity onPress={() => selectImage()}>
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
