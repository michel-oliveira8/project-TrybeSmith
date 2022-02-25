import { Request, Response } from 'express';
import { StatusCode } from '../interfaces/statusCode';

import productsService from '../services/productsService';

const createProducts = async (req: Request, res: Response) => {
  const product = req.body;

  const payload = await productsService.create(product);
  
  res.status(StatusCode.CREATED).json({ item: payload });
};

const getAll = async (_req: Request, res: Response) => {
  const result = await productsService.getAll();

  res.status(StatusCode.OK).json(result);
};

export default {
  createProducts,
  getAll,
};