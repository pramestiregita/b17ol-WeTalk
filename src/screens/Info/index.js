import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Formik} from 'formik';

import styled from './style';
import color from '../../assets/color';

export default function Info() {
  const info = [
    {
      id: 1,
      name: 'Ada',
      selected: true,
    },
    {
      id: 2,
      name: 'Sibuk',
      selected: false,
    },
    {
      id: 3,
      name: 'Di sekolah',
      selected: false,
    },
    {
      id: 4,
      name: 'Di bioskop',
      selected: false,
    },
  ];

  const infoSheet = useRef();

  return (
    <View style={styled.parent}>
      <View style={styled.contentWrapper}>
        <Text style={styled.title}>Saat ini disetel ke</Text>
        <TouchableOpacity
          onPress={() => infoSheet.current.open()}
          style={styled.selected}>
          <Text style={styled.content}>Ada</Text>
          <Icon name="edit" size={20} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styled.divider} />

      <View style={styled.contentWrapper}>
        <Text style={styled.title}>Pilih info</Text>
        <FlatList
          data={info}
          renderItem={({item}) =>
            item.selected ? (
              <View style={styled.selected}>
                <Text style={styled.content}>{item.name}</Text>
                <Icon name="check" size={20} color={color.header} />
              </View>
            ) : (
              <View style={styled.list}>
                <Text style={styled.content}>{item.name}</Text>
              </View>
            )
          }
          keyExtractor={(item) => item.id}
        />
      </View>

      <RBSheet
        ref={infoSheet}
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
        <Formik initialValues={{info: ''}}>
          {({handleBlur, handleChange, handleSubmit, values}) => (
            <View style={styled.modalWrapper}>
              <Text>Tambah info</Text>
              <View style={styled.inputWrapper}>
                <TextInput
                  style={styled.input}
                  onChangeText={handleChange('info')}
                  onBlur={handleBlur('info')}
                  value={values.info}
                />
                <IconFa style={styled.emoji} name="laugh" size={20} />
              </View>
              <View style={styled.actionWrapper}>
                <TouchableOpacity
                  onPress={() => infoSheet.current.close()}
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
  );
}
