import http from '../../helpers/http';

export default {
  getAll: (token) => ({
    type: 'GET_ALL',
    payload: http(token).get('message/all'),
  }),
};
