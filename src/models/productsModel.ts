import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { GetAllProduct, Products, ProductsWithId } from '../interfaces/interface';
import connection from './connection';

const create = async (product: Products): Promise<ProductsWithId> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name,amount) VALUES(?,?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;

  const IdProduct: ProductsWithId = { id, name, amount };
  
  return IdProduct;
};

const getAll = async ():Promise<GetAllProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute<RowDataPacket[]>(query);

  return result as GetAllProduct[];
};

export default {
  create,
  getAll,
};