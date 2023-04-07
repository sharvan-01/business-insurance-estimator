import axios from 'axios';

import { values } from './index.js';

const properties = values;

sendDataToHS();
{
  axios({
    method: 'POST',
    url: 'https://api.hubspot.com/crm/v3/objects/contacts',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer pat-na1-fea61155-8e9d-4493-9f3b-1d8d2359aca1`,
    },
    data: {
      properties,
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
