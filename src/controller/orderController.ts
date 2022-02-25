import { Request, Response } from 'express';
import { StatusCode } from '../interfaces/statusCode';
import orderServices from '../services/orderServices';

const createOrder = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const { products } = req.body;

  if (authorization) {
    const order = await orderServices.createOrder(products, authorization);
    res.status(StatusCode.CREATED).json({ order });
  }
};

export default {
  createOrder,
};