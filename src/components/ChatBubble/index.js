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
      if (item.content.length < 25) {
        return [styled.outgoing, styled.small];
      } else if (item.content.length < 35) {
        return [styled.outgoing, styled.med];
      } else {
        return [styled.outgoing, styled.big];
      }
    } else {
      if (item.content.length < 25) {
        return [styled.incoming, styled.small];
      } else if (item.content.length < 35) {
        return [styled.incoming, styled.med];
      } else {
        return [styled.incoming, styled.big];
      }
    }
  };

  return (
    <View key={item.id.toString().concat(item.sender.name)} style={bubble()}>
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
    alignSelf: 'flex-start',
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
  small: {
    minWidth: '40%',
  },
  med: {
    minWidth: '60%',
  },
  big: {
    minWidth: '90%',
  },
  content: {
    flex: 1,
    fontSize: 14,
    width: '100%',
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: 'grey',
  },
});
