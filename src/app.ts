import express from 'express';
import validations from './middleware/validation';

const app = express();

app.use(express.json());

app.get('/users', validations.validateUser);

export default app;
