import http from '../../helpers/http';
import qs from 'qs';

export default {
  getAll: (token) => ({
    type: 'GET_ALL',
    payload: http(token).get('message/all?limit=15'),
  }),
  getMsg: (token, id) => ({
    type: 'GET_MSG',
    payload: http(token).get(`message/${id}?limit=15`),
  }),
  sendMsg: (token, id, data) => ({
    type: 'SEND_MSG',
    payload: http(token).post(`message/send/${id}`, qs.stringify(data)),
  }),
  next: (token, url) => ({
    type: 'NEXT_MSG',
    payload: http(token).get(url),
  }),
  nextAll: (token, url) => ({
    type: 'NEXT_ALL_MSG',
    payload: http(token).get(url),
  }),
};
