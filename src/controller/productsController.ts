import { Request, Response } from 'express';
import { StatusCode } from '../interfaces/statusCode';

import productsService from '../services/productsService';

const createProducts = async (req: Request, res: Response) => {
  const product = req.body;

  const payload = await productsService.create(product);
  
  res.status(StatusCode.CREATED).json({ item: payload });
};

export default {
  createProducts,
};