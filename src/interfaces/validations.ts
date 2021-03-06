import { StatusCode, MSG } from './statusCode';
import { CodeResponse } from './interface';

const validateUsername = (username: string): CodeResponse => {
  if (!username) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.USERNAME_REQUIRED };
  }
  if (typeof username !== 'string') {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.USERNAME_TYPE_STRING };
  }
  if (username.length <= 2) {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.USERNAME_LENGTH };
  }

  return {};
};

const validateClasse = (classe: string): CodeResponse => {
  if (!classe) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.CLASSE_REQUIRED };
  }
  if (typeof classe !== 'string') {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.CLASSE_TYPE_STRING };
  }
  if (classe.length <= 2) {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.CLASSE_LENGTH };
  }

  return {};
};

const validateLevel = (level:number): CodeResponse => {
  if (level <= 0) {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.LEVEL_GREATER_THAN_ZERO };
  }
  if (!level) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.LEVEL_REQUIRED };
  }
  if (typeof level !== 'number') {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.LEVEL_TYPE_NUMBER };
  }

  return {};
};

const validatePassword = (password: string): CodeResponse => {
  if (!password) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.PASSWORD_REQUIRED };
  }
  if (typeof password !== 'string') {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.PASSWORD_TYPE_STRING };
  }
  if (password.length < 8) {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.PASSWORD_LENGTH };
  }

  return {};
};

const validateLogin = (username: string, password: string): CodeResponse => {
  if (!username) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.USERNAME_REQUIRED };
  }
  if (!password) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.PASSWORD_REQUIRED };
  }

  return {};
};

const validateName = (name: string): CodeResponse => {
  if (!name) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.NAME_REQUIRED };
  }
  if (typeof name !== 'string') {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.NAME_STRING };
  }
  if (name.length <= 2) {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.NAME_LENGTH };
  }

  return {};
};

const validateAmount = (amount: string): CodeResponse => {
  if (!amount) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.AMOUNT_REQUIRED };
  }
  if (typeof amount !== 'string') {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.AMOUNT_STRING };
  }
  if (amount.length <= 2) {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.AMOUNT_LENGTH };
  }

  return {};
};

const validateOrder = (products: []): CodeResponse => {
  if (!products) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.PRODUCTS_REQUIRED };
  }
  if (!Array.isArray(products)) {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.PRODUCTS_ARRAY };
  }
  if (!products.length) {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.PRODUCTS_ARRAY_EMPTY };
  }

  return {};
};

export default {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
  validateLogin,
  validateName,
  validateAmount,
  validateOrder,
};
