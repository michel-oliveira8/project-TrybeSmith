import * as jwt from 'jsonwebtoken';
import { Payload } from '../interfaces/interface';

const secret = 'seusecretdetoken';

const token = (payload: Payload) => {
  const createToken = jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '7d' });
  return createToken;
};

export default {
  token,
};