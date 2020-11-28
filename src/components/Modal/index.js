import React from 'react';
import {StyleSheet} from 'react-native';
import {Spinner} from 'native-base';
import Modal, {ModalContent} from 'react-native-modals';

import color from '../../assets/color';

export default function index({visible}) {
  return (
    <Modal
      modalStyle={styled.parent}
      visible={visible}
      width={100}
      height={100}>
      <ModalContent>
        <Spinner color={color.title} />
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
