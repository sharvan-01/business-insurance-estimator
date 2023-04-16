import { Client } from '@hubspot/api-client';
const hubspotClient = new Client({ accessToken: process.env.HS_TOKEN });
import axios from 'axios';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://webdev.plumhq.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const hubspotToken = process.env.HS_TOKEN;
    const data = req.body;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${hubspotToken}`,
      },
    };
    try {
      const response = await axios.post(
        'https://api.hubapi.com/crm/v3/objects/contacts',
        data,
        config
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      console.log(data);
      res.status(500).json({ message: 'Failed to create contact.' });
    }
  } else if (req.method === 'PATCH') {
    // const hubspotToken = process.env.HS_TOKEN;
    // const dataObject = req.body;
    // // const identifier = dataObject.id;
    // // const dataToUpdate = dataObject.property;
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${hubspotToken}`,
    //   },
    // };
    // try {
    //   const response = await axios.patch(
    //     `https://api.hubapi.com/crm/v3/objects/contacts/42118001`,
    //     dataObject,
    //     config
    //   );

    //   res.status(200).json(response.data);
    // } catch (error) {
    //   console.error(error.message);
    //   if (error.response) {
    //     res.status(400).json(error.response.data);
    //   } else {
    //     res.status(500).json(error.response.data);
    //   }
    // }
    const data = req.body;
    const SimplePublicObjectInput = { data };
    const contactId = '42118001';

    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.update(
        contactId,
        SimplePublicObjectInput
      );
      console.log(JSON.stringify(apiResponse, null, 2));
    } catch (e) {
      e.message === 'HTTP request failed'
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e);
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
