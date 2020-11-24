import {default as axios} from 'axios';
import {API_URL} from '@env';

console.log(API_URL);

const http = (token = false) =>
  axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

export default http;
