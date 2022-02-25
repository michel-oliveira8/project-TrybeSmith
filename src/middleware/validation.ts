import { NextFunction, Request, Response } from 'express';
import { Products, User } from '../interfaces/interface';
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

const validateProducts = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body as Products;

  const validationsName = validations.validateName(name);
  if (validationsName.code) {
    return res.status(validationsName.code).json({ error: validationsName.error });
  }

  const validationsAmount = validations.validateAmount(amount);
  if (validationsAmount.code) {
    return res.status(validationsAmount.code).json({ error: validationsAmount.error });
  }

  next();
};

export default {
  validateUser,
  validateLogin,
  validateProducts,
};
