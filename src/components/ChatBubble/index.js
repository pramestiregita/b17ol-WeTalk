import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import moment from 'moment';

import color from '../../assets/color';

export default function ChatBubble({item}) {
  const {userId} = useSelector((state) => state.profile);

  const bubble = () => {
    if (item.senderId === userId) {
      if (item.content.length < 10) {
        return [styled.outgoing, styled.xsmall];
      } else if (item.content.length < 20) {
        return [styled.outgoing, styled.small];
      } else if (item.content.length < 35) {
        return [styled.outgoing, styled.med];
      } else {
        return [styled.outgoing, styled.big];
      }
    } else {
      if (item.content.length < 10) {
        return [styled.incoming, styled.xsmall];
      } else if (item.content.length < 20) {
        return [styled.incoming, styled.small];
      } else if (item.content.length < 35) {
        return [styled.incoming, styled.med];
      } else {
        return [styled.incoming, styled.big];
      }
    }
  };

  return (
    <View key={item.id} style={bubble()}>
      <Text style={styled.content}>{item.content}</Text>
      <Text style={styled.time}>
        {moment(item.createdAt).format('hh:mm A')}
      </Text>
    </View>
  );
}

const styled = StyleSheet.create({
  incoming: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
  },
  outgoing: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: color.outChat,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  xsmall: {
    width: '30%',
  },
  small: {
    width: '50%',
  },
  med: {
    width: '60%',
  },
  big: {
    width: '90%',
  },
  content: {
    flex: 1,
    fontSize: 14,
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: 'grey',
  },
});
