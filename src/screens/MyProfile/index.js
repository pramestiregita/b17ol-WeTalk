import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Formik} from 'formik';

import styled from './style';
import color from '../../assets/color';

import avatar from '../../assets/avatar.jpg';

export default function MyProfile({navigation}) {
  const nameSheet = useRef();

  return (
    <View style={styled.parent}>
      <Image style={styled.avatar} source={avatar} />
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
                <Text>Name</Text>
              </View>
              <Icon name="edit" size={20} color="grey" />
            </View>
            <Text style={styled.subtext}>
              Ini bukan nama pengguna atau PIN Anda. Nama ini akan terlihat oleh
              kontak WeTalk Anda
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
                <Text>info</Text>
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
                <Text>081 272 011 951</Text>
              </View>
            </View>
            <View style={styled.divider} />
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
          <Formik initialValues={{fullName: ''}}>
            {({handleBlur, handleChange, handleSubmit, values}) => (
              <View style={styled.modalWrapper}>
                <Text>Masukkan nama Anda</Text>
                <View style={styled.inputWrapper}>
                  <TextInput
                    style={styled.input}
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
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
      </View>
    </View>
  );
}
