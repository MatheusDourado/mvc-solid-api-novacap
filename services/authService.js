const axios = require('axios');
const qs = require('qs');

exports.obtainToken = async () => {
	const data = qs.stringify({
		'client_id': process.env.CLIENT_ID,
		'client_secret': process.env.CLIENT_SECRET,
		'grant_type': 'client_credentials',
	});

	const config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: process.env.TOKEN_URL,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': 'Basic ' + Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64'),
		},
		data: data,
	};

	const response = await axios.request(config);
	return response.data;
};
