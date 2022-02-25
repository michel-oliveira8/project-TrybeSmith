import { ProductsWithId } from '../interfaces/user';
import productsModel from '../models/productsModel';

const create = async (product: ProductsWithId) => {
  const { id, name, amount } = await productsModel.create(product);
  const payload = { id, name, amount };
  
  return payload;
};

export default {
  create,
};