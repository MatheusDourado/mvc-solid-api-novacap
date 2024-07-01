const dataService = require('../services/dataService');

exports.sendData = async (req, res) => {
	try {
		const responseData = await dataService.sendData(req.body);
		res.json(responseData);
	} catch (error) {
		console.error('Erro ao enviar dados:', error);
		res.status(500).json({
			error: 'Erro ao enviar dados',
			details: error.message,
		});
	}
};
