import {default as axios} from 'axios';

const country = async () => {
  const {data} = await axios.get('https://restcountries.eu/rest/v2/all');
  if (data.length) {
    data.map((i) => {
      const res = {
        name: i.name,
        code: i.callingCodes[0],
      };
      return res;
    });
  }
};

export default country;
