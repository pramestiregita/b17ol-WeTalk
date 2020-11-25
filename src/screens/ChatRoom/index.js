import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import {View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Formik} from 'formik';

import styled from './style';
import messageAction from '../../redux/actions/message';
import friendAction from '../../redux/actions/friend';

import Header from '../../components/ChatHeader';
import Bubble from '../../components/ChatBubble';

export default function ChatRoom({route}) {
  const {id: friendId} = route.params;

  const [data, setData] = useState([]);

  const {token} = useSelector((state) => state.auth);
  const {detailInfo} = useSelector((state) => state.message);
  const {detail: friend} = useSelector((state) => state.friend);

  const dispatch = useDispatch();
  const input = useRef();

  const getDetail = async () => {
    const {value} = await dispatch(messageAction.getMsg(token, friendId));
    setData(value.data.data);
  };

  const getFriend = async () => {
    await dispatch(friendAction.getFriend(token, friendId));
  };

  const getData = async () => {
    await dispatch(messageAction.getAll(token));
  };

  useEffect(() => {
    getDetail();
    getFriend();
  }, []);

  const send = async (body) => {
    const {value} = await dispatch(
      messageAction.sendMsg(token, friendId, body),
    );

    if (value.data.success) {
      getDetail();
      getData();
    }
  };

  const nextPage = async () => {
    if (detailInfo.nextLink) {
      const {value} = await dispatch(
        messageAction.next(token, detailInfo.nextLink),
      );
      const nextData = [...data, ...value.data.data];
      setData(nextData);
    }
  };

  return (
    <>
      <Header item={friend} />
      <View style={styled.parent}>
        <View style={styled.contentWrapper}>
          <FlatList
            inverted
            data={data}
            renderItem={({item}) => <Bubble item={item} />}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={nextPage}
            onEndReachedThreshold={(0, 1)}
          />
        </View>

        <Formik
          initialValues={{content: ''}}
          onSubmit={(values) => {
            send(values);
            input.current.clear();
          }}>
          {({handleBlur, handleChange, handleSubmit, values}) => (
            <View style={styled.footerWrapper}>
              <View style={styled.inputWrapper}>
                <View style={styled.iconWrapper}>
                  <Icon
                    style={styled.icon}
                    name="laugh"
                    size={20}
                    color="grey"
                  />
                </View>

                <TextInput
                  ref={input}
                  onChangeText={handleChange('content')}
                  onBlur={handleBlur('content')}
                  // onSubmitEditing={handleSubmit}
                  style={styled.input}
                  placeholder="Ketik pesan"
                  multiline
                  value={values.content}
                />

                <View style={[styled.iconWrapper, styled.file]}>
                  <Icon
                    style={styled.icon}
                    name="paperclip"
                    size={20}
                    color="grey"
                  />
                </View>

                {values.content === '' ? (
                  <View style={[styled.iconWrapper, styled.file]}>
                    <Icon
                      style={styled.icon}
                      name="camera"
                      size={20}
                      color="grey"
                    />
                  </View>
                ) : null}
              </View>

              <View>
                {values.content === '' ? (
                  <TouchableOpacity style={styled.actionWrapper}>
                    <IconMi name="mic" size={25} color="white" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styled.actionWrapper}>
                    <IconMi name="send" size={20} color="white" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        </Formik>
      </View>
    </>
  );
}
