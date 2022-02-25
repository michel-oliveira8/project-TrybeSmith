import express from 'express';
import validations from './middleware/validation';
import usersController from './controller/usersController';
import authorization from './auth/authorization';
import productsController from './controller/productsController';

const app = express();

app.use(express.json());

app.post('/users', validations.validateUser, usersController.createUser);

app.post('/login', validations.validateLogin, usersController.login);

app.use(authorization.authorizationToken);

app.post('/products', validations.validateProducts, productsController.createProducts);

export default app;
