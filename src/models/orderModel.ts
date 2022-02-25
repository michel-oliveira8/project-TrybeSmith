import { ResultSetHeader } from 'mysql2';
import { Order } from '../interfaces/interface';
import connection from './connection';

const createOrder = async (idUser: Order): Promise<void> => {
  const { userId, products } = idUser;
  const query1 = 'INSERT INTO Trybesmith.Orders (userId) VALUES(?)';
  const [result] = await connection.execute<ResultSetHeader>(query1, [userId]);
  const { insertId: id } = result;

  const order = products.map(async (product) => {
    const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    await connection.execute(query2, [id, product]);
  });
  Promise.all(order);
};

export default {
  createOrder,
};