import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
  },
  listWrapper: {
    marginTop: 40,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    marginRight: 20,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  nameWrapper: {
    flex: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: 'grey',
  },
  subtext: {
    fontSize: 12,
  },
  divider: {
    backgroundColor: 'grey',
    height: 0.5,
    marginTop: 15,
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
