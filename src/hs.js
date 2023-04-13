import axios from 'axios';

import { values } from './index.js';

const properties = values;

function sendDataToHS() {
  axios({
    method: 'POST',
    url: 'https://api.hubspot.com/crm/v3/objects/contacts',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer <API TOKEN>`,
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
