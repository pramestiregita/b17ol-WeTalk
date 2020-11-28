import {ToastAndroid} from 'react-native';

export default function toast(message) {
  return ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.TOP,
    0,
    300,
  );
}
