import {StyleSheet} from 'react-native';

import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    paddingBottom: 30,
  },
  headerWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 400,
  },
  name: {
    position: 'absolute',
    bottom: 5,
    left: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  info: {
    alignSelf: 'flex-start',
  },
  title: {
    color: color.title,
    paddingTop: 10,
    paddingLeft: 15,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
  actionWrapper: {
    flexDirection: 'row',
  },
  action: {
    flex: 1,
    marginLeft: 20,
    color: 'red',
  },
});
