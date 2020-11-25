import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Formik} from 'formik';
import ImagePicker from 'react-native-image-picker';

import {API_URL, LIMIT_FILE} from '@env';

import styled from './style';
import color from '../../assets/color';
import profileAction from '../../redux/actions/profile';

import avatar from '../../assets/avatar.jpg';

export default function MyProfile({navigation}) {
  const {token} = useSelector((state) => state.auth);
  const {data} = useSelector((state) => state.profile);

  const nameSheet = useRef();
  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(profileAction.getProfile(token));
  };

  const submit = async (body) => {
    const {value} = await dispatch(profileAction.changeName(token, body));
    if (value.data.success) {
      nameSheet.current.close();
      getData();
    }
  };

  const selectImage = async () => {
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
      if (response.didCancel) {
        Alert.alert("You didn't select an image");
      } else if (response.error) {
        Alert.alert('Try again later!');
      } else if (response.fileSize > LIMIT_FILE) {
        Alert.alert('File is too big');
      } else {
        const form = new FormData();

        form.append('avatar', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });

        const {value} = await dispatch(profileAction.changeAva(token, form));
        if (value.data.success) {
          nameSheet.current.close();
          getData();
        }
      }
    });
  };

  return (
    Object.keys(data).length > 0 && (
      <>
        <View style={styled.parent}>
          <View style={styled.imageWrapper}>
            <Image
              style={styled.avatar}
              source={data.avatar ? {uri: API_URL.concat(data.avatar)} : avatar}
            />
            <TouchableOpacity
              onPress={() => selectImage()}
              style={styled.cameraWrapper}>
              <IconFa name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styled.listWrapper}>
            <TouchableOpacity
              onPress={() => nameSheet.current.open()}
              style={styled.list}>
              <View style={styled.icon}>
                <Icon name="person" size={25} color={color.header} />
              </View>
              <View style={styled.content}>
                <View style={styled.header}>
                  <View style={styled.nameWrapper}>
                    <Text style={styled.title}>Nama</Text>
                    <Text>{data.name}</Text>
                  </View>
                  <Icon name="edit" size={20} color="grey" />
                </View>
                <Text style={styled.subtext}>
                  Ini bukan nama pengguna atau PIN Anda. Nama ini akan terlihat
                  oleh kontak WeTalk Anda
                </Text>
                <View style={styled.divider} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Info')}
              style={styled.list}>
              <View style={styled.icon}>
                <IconFa name="info-circle" size={25} color={color.header} />
              </View>

              <View style={styled.content}>
                <View style={styled.header}>
                  <View style={styled.nameWrapper}>
                    <Text style={styled.title}>Info</Text>
                    <Text>Ada</Text>
                  </View>

                  <Icon name="edit" size={20} color="grey" />
                </View>

                <View style={styled.divider} />
              </View>
            </TouchableOpacity>

            <View style={styled.list}>
              <View style={styled.icon}>
                <Icon name="phone" size={25} color={color.header} />
              </View>

              <View style={styled.content}>
                <View style={styled.header}>
                  <View style={styled.nameWrapper}>
                    <Text style={styled.title}>Telepon</Text>
                    <Text>{data.phoneNumber}</Text>
                  </View>
                </View>

                <View style={styled.divider} />
              </View>
            </View>
          </View>
        </View>

        <RBSheet
          ref={nameSheet}
          closeOnDragDown={true}
          closeOnPressMask
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
              borderTopRightRadius: 50,
            },
            draggableIcon: {
              backgroundColor: 'transparent',
            },
            container: {
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              elevation: 2,
            },
          }}
          height={150}>
          <Formik
            initialValues={{name: data.name}}
            onSubmit={(values) => submit(values)}>
            {({handleBlur, handleChange, handleSubmit, values}) => (
              <View style={styled.modalWrapper}>
                <Text>Masukkan nama Anda</Text>

                <View style={styled.inputWrapper}>
                  <TextInput
                    style={styled.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    onSubmitEditing={handleSubmit}
                    autoFocus={true}
                    value={values.name}
                  />

                  <IconFa style={styled.emoji} name="laugh" size={20} />
                </View>

                <View style={styled.actionWrapper}>
                  <TouchableOpacity
                    onPress={() => nameSheet.current.close()}
                    style={styled.btn}>
                    <Text style={styled.btnText}>Batal</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={handleSubmit} style={styled.btn}>
                    <Text style={styled.btnText}>Simpan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </RBSheet>
      </>
    )
  );
}
