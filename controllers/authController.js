const authService = require('../services/authService');

exports.getToken = async (req, res) => {
	try {
		const tokenData = await authService.obtainToken();
		res.json(tokenData);
	} catch (error) {
		console.error('Erro ao obter o token:', error);
		res.status(500).json({
			error: 'Erro ao obter o token',
			details: error.message,
		});
	}
};
