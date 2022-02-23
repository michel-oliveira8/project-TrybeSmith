import { StatusCode, MSG } from './statusCode';
import { CodeResponse } from './user';

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
  if (!level) {
    return { code: StatusCode.BAD_REQUEST, error: MSG.LEVEL_REQUIRED };
  }
  if (typeof level !== 'number') {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.LEVEL_TYPE_NUMBER };
  }
  if (level < 0) {
    return { code: StatusCode.UNPROCCESSABLE_ENTITY, error: MSG.LEVEL_GREATER_THAN_ZERO };
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

export default {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
};
