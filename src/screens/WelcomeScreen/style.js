import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 80,
    backgroundColor: color.theme,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: color.title,
    fontWeight: 'bold',
    fontSize: 28,
  },
  image: {
    width: 150,
    height: 150,
  },
  textWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    textAlign: 'center',
  },
  link: {
    color: color.linkColor,
  },
  btnWrapper: {
    width: '80%',
    marginTop: 20,
  },
  btn: {
    backgroundColor: color.btnColor,
  },
  btnText: {
    color: color.btnTextColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
});
