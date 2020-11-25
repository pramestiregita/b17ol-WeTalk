import React, {useEffect, useRef} from 'react';
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
  const {token} = useSelector((state) => state.auth);
  const {detail, isSuccess} = useSelector((state) => state.message);
  const {detail: friend} = useSelector((state) => state.friend);

  const dispatch = useDispatch();
  const input = useRef();

  const getDetail = async () => {
    await dispatch(messageAction.getMsg(token, friendId));
    await dispatch(friendAction.getFriend(token, friendId));
  };

  const getData = async () => {
    await dispatch(messageAction.getAll(token));
  };

  useEffect(() => {
    getDetail();
  }, []);

  const send = async (value) => {
    await dispatch(messageAction.sendMsg(token, friendId, value));
  };

  useEffect(() => {
    if (isSuccess) {
      getDetail();
      getData();
    }
  }, [isSuccess]);

  const data = [
    {
      id: 1,
      senderId: 2,
      recipientId: 1,
      content: 'Hai',
      time: '12.30',
    },
    {
      id: 2,
      senderId: 1,
      recipientId: 2,
      content: 'Hai',
      time: '12.30',
    },
    {
      id: 3,
      senderId: 2,
      recipientId: 1,
      content: 'Halo',
      time: '12.30',
    },
    {
      id: 4,
      senderId: 1,
      recipientId: 2,
      content: 'Halo',
      time: '12.30',
    },
    {
      id: 5,
      senderId: 2,
      recipientId: 1,
      content:
        'Pandemi corona semakin melanda dunia, tetapi BTS tetap menelurkan karya.',
      time: '12.30',
    },
    {
      id: 6,
      senderId: 1,
      recipientId: 2,
      content:
        'Tampaknya, BTS bakal melakukan comeback sebanyak dua kali pada tahun 2020 ini. Sebab, Big Hit Entertainment baru saja merilis pengumuman tanggal peluncuran album baru boy group yang digawangi RM sebagai leader tersebut. ',
      time: '12.30',
    },
    {
      id: 7,
      senderId: 2,
      recipientId: 1,
      content:
        'Para member BTS acap kali mengatakan pada deretan penampilan terbaru, mereka ingin terus menghibur para penggemar yang disebut ARMY di waktu yang serba sulit seperti sekarang. ',
      time: '12.30',
    },
    {
      id: 8,
      senderId: 1,
      recipientId: 2,
      content:
        'Album baru BTS yang bertajuk Be ini akan rilis tepat pada tanggal 20 November 2020 mendatang. ',
      time: '12.30',
    },
  ];

  return (
    <>
      <Header item={friend} />
      <View style={styled.parent}>
        <View style={styled.contentWrapper}>
          <FlatList
            inverted
            data={detail}
            renderItem={({item}) => <Bubble item={item} />}
            keyExtractor={(item) => item.id.toString()}
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
