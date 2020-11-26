import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: color.header,
  },
  iconWrapper: {
    width: 50,
    alignItems: 'center',
    marginRight: 20,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    color: 'white',
    fontSize: 13,
  },
  icon: {
    marginHorizontal: 15,
  },
  option: {
    padding: 10,
  },
  searchParent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
  },
  inputWrapper: {
    width: '100%',
  },
  input: {
    fontSize: 16,
  },
});
