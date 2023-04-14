import axios from 'axios';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://webdev.plumhq.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
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
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
