import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList, TouchableOpacity, Text, TextInput} from 'react-native';
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

import List from '../../components/ContactList';

const searchSchema = Yup.object().shape({
  search: Yup.string().required(),
});

export default function Contact() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const {token} = useSelector((state) => state.auth);
  const {pageInfo} = useSelector((state) => state.friend);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getData = async () => {
    const {value} = await dispatch(friendAction.getContact(token));
    setData(value.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const searching = async (body) => {
    const {value} = await dispatch(friendAction.searchContact(token, body));
    setData(value.data.data);
  };

  const back = () => {
    getData();
    setSearch(false);
  };

  const nextPage = async () => {
    if (pageInfo.nextLink) {
      const {value} = await dispatch(
        friendAction.next(token, pageInfo.nextLink),
      );
      const nextData = [...data, ...value.data.data];
      setData(nextData);
    }
  };

  return (
    Object.keys(data).length > 0 && (
      <>
        {!search ? (
          <View style={styled.parent}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styled.iconWrapper}>
              <IconFa name="arrow-left" size={20} color="white" />
            </TouchableOpacity>
            <View style={styled.titleWrapper}>
              <Text style={styled.title}>Pilih kontak</Text>
              <Text style={styled.subtitle}>{pageInfo.totalData} kontak</Text>
            </View>
            <TouchableOpacity onPress={() => setSearch(true)}>
              <IconFa
                style={styled.icon}
                name="search"
                size={20}
                color="white"
              />
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
        )}
        <View style={styled.listParent}>
          <FlatList
            data={data}
            renderItem={({item}) => <List item={item} />}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={nextPage}
            onEndReachedThreshold={(0, 5)}
          />
        </View>
      </>
    )
  );
}
