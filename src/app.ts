import express from 'express';
import validations from './middleware/validation';
import usersController from './controller/usersController';

const app = express();

app.use(express.json());

app.post('/users', validations.validateUser, usersController.createUser);

export default app;
