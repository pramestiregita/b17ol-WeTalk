import http from '../../helpers/http';
import qs from 'qs';

export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post('auth/login', qs.stringify(data)),
  }),
  relogin: (data) => ({
    type: 'RELOGIN',
    payload: http().post('auth/refresh-token', qs.stringify(data)),
  }),
};
