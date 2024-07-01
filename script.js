const express = require('express');
const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota para obter o access_token
app.post('/get-token', async (req, res) => {
	try {
		const data = qs.stringify({
			'client_id': process.env.CLIENT_ID,
			'client_secret': process.env.CLIENT_SECRET,
			'grant_type': 'client_credentials'
		});

		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: process.env.TOKEN_URL,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Basic ' + Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')
			},
			data: data
		};

		const response = await axios.request(config);
		res.json(response.data);
	} catch (error) {
		console.error('Erro ao obter o token:', error.response ? error.response.data : error.message);
		res.status(500).json({
			error: 'Erro ao obter o token',
			details: error.response ? error.response.data : error.message
		});
	}
});

// Rota para enviar dados para a Novacap
app.post('/send-data', async (req, res) => {
	try {
		// Primeiro, obtenha o token
		const tokenResponse = await axios.post('http://localhost:3000/get-token');
		const token = tokenResponse.data.access_token;

		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: process.env.DATA_URL,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			data: JSON.stringify(req.body)
		};

		const response = await axios.request(config);
		res.json(response.data);
	} catch (error) {
		console.error('Erro ao enviar dados:', error.response ? error.response.data : error.message);
		res.status(500).json({
			error: 'Erro ao enviar dados',
			details: error.response ? error.response.data : error.message
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});