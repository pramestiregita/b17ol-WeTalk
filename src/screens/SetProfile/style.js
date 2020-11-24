import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  contentWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: color.title,
  },
  text: {
    marginVertical: 20,
    fontSize: 12,
    color: 'grey',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
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
  btnWrapper: {
    width: '20%',
  },
  btn: {
    backgroundColor: color.btnColor,
  },
  btnText: {
    color: color.btnTextColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
