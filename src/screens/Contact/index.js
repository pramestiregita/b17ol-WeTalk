/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, StyleSheet} from 'react-native';

import authAction from '../../redux/actions/auth';
import friendAction from '../../redux/actions/friend';

import List from '../../components/ContactList';
import Spinner from '../../components/Spinner';
import EmptyData from '../../components/EmptyData';

export default function Contact() {
  const loading = false;

  const {token, refreshToken} = useSelector((state) => state.auth);
  const {isLoading, data, pageInfo, alertMsg} = useSelector(
    (state) => state.friend,
  );

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      await dispatch(friendAction.getContact(token));
    } catch (e) {
      console.log(e.message);
    }
  };

  const relogin = async () => {
    try {
      await dispatch(authAction.relogin({refreshToken}));
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, [token]);

  useEffect(() => {
    if (alertMsg === 'Unauthorized') {
      relogin();
    }
  }, [alertMsg]);

  const nextPage = async () => {
    if (pageInfo.nextLink) {
      await dispatch(friendAction.next(token, pageInfo.nextLink));
    }
  };

  return (
    <>
      <View style={styled.parent}>
        {!isLoading ? (
          Object.keys(data).length > 0 ? (
            <FlatList
              data={data}
              renderItem={({item}) => <List item={item} />}
              keyExtractor={(item) => item.id.toString()}
              onEndReached={nextPage}
              onEndReachedThreshold={(0, 5)}
              refreshing={loading}
              onRefresh={getData}
            />
          ) : (
            <EmptyData text="There is no contact" />
          )
        ) : (
          <Spinner />
        )}
      </View>
    </>
  );
}

const styled = StyleSheet.create({
  parent: {
    flex: 1,
  },
});
