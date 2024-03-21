// server/server.ts

import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { sql } from '@vercel/postgres';
import { router } from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const pool = sql.createPool({
  connectionString: process.env.POSTGRES_URL,
  max: 5,
  min: 1,
  acquire: 30000,
  idle: 10000,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
    pool.query(`CREATE TABLE IF NOT EXISTS Jobs (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      location VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL
    );`);
  }
});

app.use('/api', async (req, res, next) => {
  try {
    const response = await axios.request(req);
    res.set(response.headers);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Welcome to the Job Board API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});