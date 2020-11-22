import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    color: color.header,
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 15,
  },
  selected: {
    flexDirection: 'row',
    height: 30,
    marginVertical: 5,
  },
  content: {
    flex: 1,
  },
  list: {
    height: 30,
    marginVertical: 5,
  },
  divider: {
    height: 0.5,
    backgroundColor: 'grey',
  },
  modalWrapper: {
    paddingHorizontal: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: color.title,
    paddingBottom: 0,
    marginRight: 5,
  },
  emoji: {
    paddingTop: 15,
  },
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  btn: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 75,
  },
  btnText: {
    color: color.header,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
