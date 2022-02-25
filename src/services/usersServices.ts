import { Login, UserWithId } from '../interfaces/interface';
import usersModel from '../models/usersModel';
import Token from '../auth/token';
import { MSG, StatusCode } from '../interfaces/statusCode';

const createUser = async (user: UserWithId) => {
  const { id, username } = await usersModel.create(user);
  const payload = { id, username };
  const validToken = Token.token(payload);
  return validToken;
};

const login = async (userLogin: Login) => {
  const user = await usersModel.login(userLogin);
  
  if (!user) {
    return { code: StatusCode.UNAUTHORIZED, error: MSG.USERNAME_OR_PASSWORD_INVALID };
  }
  const payloadLogin = { id: user.id, username: user.username, password: user.password };
  const validToken = Token.token(payloadLogin);
  return validToken;
};

export default {
  createUser,
  login,
};