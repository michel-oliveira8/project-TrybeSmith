import { UserWithId } from '../interfaces/user';
import usersModel from '../models/usersModel';
import Token from '../auth/token';

const createUser = async (user: UserWithId) => {
  const { id, username } = await usersModel.create(user);
  const payload = { id, username };
  const validToken = Token.token(payload);
  return validToken;
};

export default {
  createUser,
};