import axios from 'axios';

export const config = {
  api: {
    cors: {
      origin: 'https://webdev.plumhq.com',
    },
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://webdev.plumhq.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body;
    const hubspotToken = process.env.HS_TOKEN;
    const hubspotEndpoint = `https://api.hubapi.com/contacts/v1/contact?hapikey=${hubspotToken}`;

    try {
      const response = await axios.post(hubspotEndpoint, {
        properties: [
          { property: 'email', value: email },
          { property: 'firstname', value: firstName },
          { property: 'lastname', value: lastName },
        ],
      });
      console.log(response.data);
      res.status(200).json({ message: 'Contact created successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create contact.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
