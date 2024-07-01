const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const corsOptions = {
	origin: 'https://atendimento.df.gov.br',
	methods: ['GET', 'POST'],
	allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
