import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
  },
  note: {
    fontSize: 13,
  },
  divider: {
    backgroundColor: 'grey',
    height: 0.5,
  },
  list: {
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconList: {
    padding: 15,
  },
  listText: {
    flex: 1,
    marginLeft: 10,
  },
  logout: {
    color: 'maroon',
    fontWeight: 'bold',
  },
});
