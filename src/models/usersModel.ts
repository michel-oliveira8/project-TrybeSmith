import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Login, User, UserWithId } from '../interfaces/interface';
import connection from './connection';

const create = async (user: User): Promise<UserWithId> => {
  const { username, classe, level, password } = user;
  const query = 'INSERT INTO Trybesmith.Users (username,classe,level,password) VALUES (?,?,?,?)';
  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  const { insertId: id } = result;

  const IdUser: UserWithId = { id, username, classe, level, password };

  return IdUser;
};

const login = async (loginUser: Login): Promise<UserWithId> => {
  const { username, password } = loginUser;
  const query = 'SELECT * FROM Trybesmith.Users WHERE USERNAME = ? AND PASSWORD = ?';
  const [result] = await connection.execute<RowDataPacket[]>(query, [username, password]);
  
  const [row] = result as UserWithId[];
  
  return row;
};

export default {
  create,
  login,
};