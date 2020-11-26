/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {Formik} from 'formik';
import * as Yup from 'yup';

import friendAction from '../../redux/actions/friend';
import styled from './style';
import color from '../../assets/color';

const searchSchema = Yup.object().shape({
  search: Yup.string().required(),
});

export default function ContactHeader() {
  const [search, setSearch] = useState(false);
  const {token} = useSelector((state) => state.auth);
  const {isLoading, pageInfo} = useSelector((state) => state.friend);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getData = async () => {
    await dispatch(friendAction.getContact(token));
  };

  useEffect(() => {
    getData();
  }, []);

  const searching = async (body) => {
    await dispatch(friendAction.searchContact(token, body));
  };

  const back = () => {
    getData();
    setSearch(false);
  };

  return !search ? (
    <View style={styled.parent}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styled.iconWrapper}>
        <IconFa name="arrow-left" size={20} color="white" />
      </TouchableOpacity>
      <View style={styled.titleWrapper}>
        <Text style={styled.title}>Pilih kontak</Text>
        {!isLoading ? (
          <Text style={styled.subtitle}>{pageInfo.totalData} kontak</Text>
        ) : (
          <Text style={styled.subtitle} />
        )}
      </View>
      <TouchableOpacity onPress={() => setSearch(true)}>
        <IconFa style={styled.icon} name="search" size={20} color="white" />
      </TouchableOpacity>
      <Menu>
        <MenuTrigger>
          <IconFa
            style={styled.icon}
            name="ellipsis-v"
            size={20}
            color="white"
          />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption>
            <Text style={styled.option}>Grup baru</Text>
          </MenuOption>
          <MenuOption>
            <Text style={styled.option}>Siaran baru</Text>
          </MenuOption>
          <MenuOption>
            <Text style={styled.option}>WeTalk Web</Text>
          </MenuOption>
          <MenuOption>
            <Text style={styled.option}>Pesan berbintanng</Text>
          </MenuOption>
          <MenuOption onSelect={() => navigation.navigate('Settings')}>
            <Text style={styled.option}>Setelan</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  ) : (
    <View style={styled.searchParent}>
      <TouchableOpacity onPress={() => back()} style={styled.iconWrapper}>
        <IconFa name="arrow-left" size={20} color={color.header} />
      </TouchableOpacity>
      <Formik
        initialValues={{search: ''}}
        validationSchema={searchSchema}
        onSubmit={(values) => searching(values.search)}>
        {({handleBlur, handleChange, handleSubmit, values}) => (
          <View style={styled.inputWrapper}>
            <TextInput
              onChangeText={handleChange('search')}
              onChange={handleSubmit}
              onBlur={handleBlur('search')}
              onSubmitEditing={handleSubmit}
              autoFocus={true}
              placeholder="Search"
              style={styled.input}
              value={values.search}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
