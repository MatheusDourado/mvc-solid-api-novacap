const express = require('express');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
