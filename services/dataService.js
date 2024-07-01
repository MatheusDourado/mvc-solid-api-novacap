const axios = require('axios');
const authService = require('./authService');

exports.sendData = async (citsmartData) => {
	const tokenData = await authService.obtainToken();
	const token = tokenData.access_token;

	const config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: process.env.DATA_URL,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
		},
		data: JSON.stringify(citsmartData),
	};

	const response = await axios.request(config);
	return response.data;
};
