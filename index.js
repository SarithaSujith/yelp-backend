import dotenv from 'dotenv';
dotenv.config('./.env');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import getHospitals from './routes/hospital.js';

const { PORT, MNG_DB } = process.env;
const port = PORT || 5000;

const app = express();

mongoose.connect(MNG_DB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose.'));

app.use(cors());
//built in middleware function in Express starting from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body. Without this, req.body would be undefined.

app.use(express.json());
//appending to the route
app.use('/api', getHospitals);
//listen to the port
app.listen(port, () => console.log(`server started on port ${port}`));
