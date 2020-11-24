import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import messageAction from '../../redux/actions/message';

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
    </View>
  );
}

const styled = StyleSheet.create({
  parent: {
    flex: 1,
  },
});
