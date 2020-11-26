import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, StyleSheet} from 'react-native';

import friendAction from '../../redux/actions/friend';

import Header from '../../components/ContactHeader';
import List from '../../components/ContactList';

export default function Contact() {
  const [data, setData] = useState([]);
  const {token} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const getData = async () => {
    const {value} = await dispatch(friendAction.getContact(token));
    setData(value.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    Object.keys(data).length > 0 && (
      <>
        <Header />
        <View style={styled.parent}>
          <FlatList
            data={data}
            renderItem={({item}) => <List item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </>
    )
  );
}

const styled = StyleSheet.create({
  parent: {
    flex: 1,
  },
});
