/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import {View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Formik} from 'formik';

import styled from './style';
import messageAction from '../../redux/actions/message';
import friendAction from '../../redux/actions/friend';
import socket from '../../helpers/socket';

import Bubble from '../../components/ChatBubble';

export default function ChatRoom({route}) {
  const {id: friendId} = route.params;
  const loading = false;

  const {token} = useSelector((state) => state.auth);
  const {detail, detailInfo} = useSelector((state) => state.message);
  const {userId} = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const input = useRef();

  const getDetail = async () => {
    try {
      await dispatch(messageAction.getMsg(token, friendId));
    } catch (e) {
      console.log(e.message);
    }
  };

  const getList = async () => {
    try {
      await dispatch(messageAction.getAll(token));
    } catch (e) {
      console.log(e.message);
    }
  };

  const getFriend = async () => {
    try {
      await dispatch(friendAction.getFriend(token, friendId));
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getList();
    getFriend();
    socket.on(userId, () => {
      getDetail();
    });
    return () => {
      socket.close();
    };
  }, []);

  const send = async (body) => {
    try {
      await dispatch(messageAction.sendMsg(token, friendId, body));
      getDetail();
      getList();
    } catch (e) {
      console.log(e.message);
    }
  };

  const nextPage = async () => {
    if (detailInfo.nextLink) {
      try {
        await dispatch(messageAction.next(token, detailInfo.nextLink));
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  return (
    <>
      <View style={styled.parent}>
        <View style={styled.contentWrapper}>
          {Object.keys(detail).length > 0 && (
            <FlatList
              inverted
              data={detail}
              renderItem={({item}) => <Bubble item={item} />}
              keyExtractor={(item) =>
                item.id.toString().concat(item.sender.name)
              }
              onEndReached={nextPage}
              onEndReachedThreshold={(0, 5)}
              refreshing={loading}
              onRefresh={getDetail}
            />
          )}
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
