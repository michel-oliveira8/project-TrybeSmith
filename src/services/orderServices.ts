import * as jwt from 'jsonwebtoken';
import orderModel from '../models/orderModel';
import { EncodeResult, Order } from '../interfaces/interface';

const createOrder = async (products:[], authorization: string): Promise<Order> => {
  const { id } = jwt.decode(authorization) as EncodeResult;
  await orderModel.createOrder({ userId: id, products });

  return { userId: id, products };
};

export default {
  createOrder,
};
