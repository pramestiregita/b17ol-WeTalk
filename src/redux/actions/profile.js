import http from '../../helpers/http';

export default {
  getProfile: (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('user/profile'),
  }),
  setProfile: (token, data) => ({
    type: 'SET_PROFILE',
    payload: http(token).patch('user/set-profile', data),
  }),
};
