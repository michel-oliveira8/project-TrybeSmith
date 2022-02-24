import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { MSG, StatusCode } from '../interfaces/statusCode';

const authorizationToken = (req: Request, res: Response, next:NextFunction) => {
  const { authorization } = req.headers;
  const secret = 'seusecretdetoken';
  if (!authorization) {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: MSG.TOKEN_NOT_FOUND });
  }

  try {
    jwt.verify(authorization, secret);

    next();
  } catch (_) {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: MSG.TOKEN_INVALID });
  }
};

export default {
  authorizationToken,
};

// Usado como referencia: // Referencia: https://github.com/tryber/sd-14a-live-lectures/blob/lecture/24.3/products-api/middlewares/authMiddleware.js