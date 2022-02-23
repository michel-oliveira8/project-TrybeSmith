import { ResultSetHeader } from 'mysql2';
import { User, UserWithId } from '../interfaces/user';
import connection from './connection';

const create = async (user: User): Promise<User> => {
  const { username, classe, level, password } = user;
  const sql = 'INSERT INTO Trybesmith.Users (username,classe,level,password) VALUES (?,?,?,?)';
  const [result] = await connection
    .execute<ResultSetHeader>(sql, [username, classe, level, password]);
  const { insertId: id } = result;

  const IdUser: UserWithId = { id, username, classe, level, password };

  return IdUser;
};

export default {
  create,
};