import * as jwt from 'jsonwebtoken';

const secret = 'seusecretdetoken';

const token = (payload: string) => {
  const createToken = jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '7d' });
  return createToken;
};

export default {
  token,
};