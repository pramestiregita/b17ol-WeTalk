import http from '../../helpers/http';
import qs from 'qs';

export default {
  getProfile: (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('user/profile'),
  }),
  changeName: (token, data) => ({
    type: 'SET_PROFILE',
    payload: http(token).patch('user/set-profile', qs.stringify(data)),
  }),
  changeAva: (token, data) => ({
    type: 'SET_AVA',
    payload: http(token).patch('user/update-ava', data),
  }),
  addDeviceToken: (token, data) => ({
    type: 'ADD_DEVICE_TOKEN',
    payload: http(token).patch('user/add-device-token', qs.stringify(data)),
  }),
};
