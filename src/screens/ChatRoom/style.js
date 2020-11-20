import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: color.chatBg,
  },
  contentWrapper: {
    flex: 1,
    padding: 10,
  },
  footerWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  iconWrapper: {
    alignItems: 'flex-end',
    paddingBottom: 13,
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  file: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  actionWrapper: {
    backgroundColor: color.header,
    marginLeft: 5,
    borderRadius: 25,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
