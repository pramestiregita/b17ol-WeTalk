import http from '../../helpers/http';
import qs from 'qs';

export default {
  getAll: (token) => ({
    type: 'GET_ALL',
    payload: http(token).get('message/all'),
  }),
  getMsg: (token, id) => ({
    type: 'GET_MSG',
    payload: http(token).get(`message/${id}`),
  }),
  sendMsg: (token, id, data) => ({
    type: 'SEND_MSG',
    payload: http(token).post(`message/send/${id}`, qs.stringify(data)),
  }),
};
