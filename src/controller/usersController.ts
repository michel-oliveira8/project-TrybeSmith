import { Request, Response } from 'express';
import { StatusCode } from '../interfaces/statusCode';

import usersServices from '../services/usersServices';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const validToken = await usersServices.createUser(user);

  return res.status(StatusCode.CREATED).json({ token: validToken });
};

const login = async (req: Request, res: Response) => {
  const userLogin = req.body;
  const validToken = await usersServices.login(userLogin);
  if (typeof validToken !== 'string' && validToken.code) {
    return res.status(validToken.code).json({ error: validToken.error }); 
  }
  return res.status(StatusCode.OK).json({ token: validToken });
};

export default {
  createUser,
  login,
};