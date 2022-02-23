import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces/user';
import validations from '../interfaces/validations';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body as User;

  const validationsUsername = validations.validateUsername(username);
  if (validationsUsername.code) {
    return res.status(validationsUsername.code).json({ error: validationsUsername.error });
  }

  const validationsClasse = validations.validateClasse(classe);
  if (validationsClasse.code) {
    return res.status(validationsClasse.code).json({ error: validationsClasse.error });
  }

  const validationsLevel = validations.validateLevel(level);
  if (validationsLevel.code) {
    return res.status(validationsLevel.code).json({ error: validationsLevel.error });
  }

  const validationsPassword = validations.validatePassword(password);
  if (validationsPassword.code) {
    return res.status(validationsPassword.code).json({ error: validationsPassword.error });
  }

  next();
};

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as User;

  const validationsUsername = validations.validateUsername(username);
  if (validationsUsername.code) {
    return res.status(validationsUsername.code).json({ error: validationsUsername.error });
  }

  const validationsPassword = validations.validatePassword(password);
  if (validationsPassword.code) {
    return res.status(validationsPassword.code).json({ error: validationsPassword.error });
  }

  next();
};

export default {
  validateUser,
  validateLogin,
};
