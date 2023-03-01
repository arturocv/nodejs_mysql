import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors';

const app= express();

// Settings
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT);

console.log(`Servidor iniciado ${PORT}`);