import express from 'express';
import validations from './middleware/validation';
import usersController from './controller/usersController';
import authorization from './auth/authorization';

const app = express();

app.use(express.json());

app.post('/users', validations.validateUser, usersController.createUser);

app.post('/login', validations.validateLogin, usersController.login);

app.use(authorization.authorizationToken);

app.post('/products');

export default app;
