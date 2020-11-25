import http from '../../helpers/http';
import qs from 'qs';

export default {
  getProfile: (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('user/profile'),
  }),
  setProfile: (token, data) => ({
    type: 'SET_PROFILE',
    payload: http(token).patch('user/set-profile', data),
  }),
  changeName: (token, data) => ({
    type: 'SET_PROFILE',
    payload: http(token).patch('user/set-profile', qs.stringify(data)),
  }),
};
