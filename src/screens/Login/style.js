import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    color: color.title,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    color: color.linkColor,
  },
  countryWrapper: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: color.title,
  },
  countryName: {
    flex: 1,
    textAlign: 'center',
  },
  numberWrapper: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
  },
  countryCode: {
    borderBottomWidth: 2,
    borderBottomColor: color.title,
    paddingBottom: 0,
    width: 50,
    textAlign: 'center',
  },
  phoneNumber: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: color.title,
    paddingBottom: 0,
  },
  info: {
    marginTop: 10,
  },
  btnWrapper: {
    width: '20%',
  },
  btn: {
    backgroundColor: color.btnColor,
  },
  btnText: {
    textTransform: 'uppercase',
    color: color.btnTextColor,
  },
});
