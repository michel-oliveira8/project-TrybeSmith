import { Request, Response } from 'express';
import { StatusCode } from '../interfaces/statusCode';

import usersServices from '../services/usersServices';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const validToken = await usersServices.createUser(user);

  return res.status(StatusCode.CREATED).json({ token: validToken });
};

export default {
  createUser,
};