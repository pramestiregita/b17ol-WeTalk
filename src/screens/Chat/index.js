import React, {useEffect} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import messageAction from '../../redux/actions/message';

import color from '../../assets/color';

import List from '../../components/ChatList';

export default function Chat() {
  const {token} = useSelector((state) => state.auth);
  const {data} = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(messageAction.getAll(token));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styled.parent}>
      <FlatList
        data={data}
        renderItem={({item}) => <List item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styled.iconWrapper}>
        <Icon name="chat" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styled = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    backgroundColor: color.btnColor,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    right: 20,
    elevation: 5,
  },
});
