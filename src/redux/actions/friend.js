import http from '../../helpers/http';

export default {
  getFriend: (token, id) => ({
    type: 'GET_DETAIL_FRIEND',
    payload: http(token).get(`user/friend/profile/${id}`),
  }),
  getContact: (token) => ({
    type: 'GET_CONTACT',
    payload: http(token).get('user/friend'),
  }),
  searchContact: (token, search) => ({
    type: 'SEARCH',
    payload: http(token).get(`user/friend?search=${search}`),
  }),
  next: (token, url) => ({
    type: 'NEXT_CONTACT',
    payload: http(token).get(url),
  }),
};
