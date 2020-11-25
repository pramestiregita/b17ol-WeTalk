import http from '../../helpers/http';

export default {
  getFriend: (token, id) => ({
    type: 'GET_DETAIL_FRIEND',
    payload: http(token).get(`user/friend/profile/${id}`),
  }),
};
