import { ProductsWithId } from '../interfaces/interface';
import productsModel from '../models/productsModel';

const create = async (product: ProductsWithId) => {
  const { id, name, amount } = await productsModel.create(product);
  const payload = { id, name, amount };
  
  return payload;
};

const getAll = async () => {
  const result = await productsModel.getAll();

  return result;
};

export default {
  create,
  getAll,
};