import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 50,
    alignItems: 'center',
    marginRight: 10,
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
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 25,
  },
  inputWrapper: {
    width: '100%',
  },
  input: {
    fontSize: 16,
  },
});
