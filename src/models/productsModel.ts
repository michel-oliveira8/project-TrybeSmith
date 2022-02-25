import { ResultSetHeader } from 'mysql2';
import { Products, ProductsWithId } from '../interfaces/user';
import connection from './connection';

const create = async (product: Products): Promise<ProductsWithId> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name,amount) VALUES(?,?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;

  const IdProduct: ProductsWithId = { id, name, amount };
  
  return IdProduct;
};

export default {
  create,
};