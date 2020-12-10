import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Spinner} from 'native-base';
import Modal, {ModalContent} from 'react-native-modals';

import color from '../../assets/color';

export default function index({visible}) {
  return (
    <Modal
      modalStyle={styled.parent}
      visible={visible}
      width={120}
      height={120}>
      <ModalContent>
        <Spinner color={color.title} />
        <Text>Loading</Text>
      </ModalContent>
    </Modal>
  );
}

const styled = StyleSheet.create({
  parent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
