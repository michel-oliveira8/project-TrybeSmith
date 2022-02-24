export enum StatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export enum MSG {
  USERNAME_REQUIRED = 'Username is required',
  USERNAME_TYPE_STRING = 'Username must be a string',
  USERNAME_LENGTH = 'Username must be longer than 2 characters',
  CLASSE_REQUIRED = 'Classe is required',
  CLASSE_TYPE_STRING = 'Classe must be a string',
  CLASSE_LENGTH = 'Classe must be longer than 2 characters',
  LEVEL_REQUIRED = 'Level is required',
  LEVEL_TYPE_NUMBER = 'Level must be a number',
  LEVEL_GREATER_THAN_ZERO = 'Level must be greater than 0',
  PASSWORD_REQUIRED = 'Password is required',
  PASSWORD_TYPE_STRING = 'Password must be a string',
  PASSWORD_LENGTH = 'Password must be longer than 7 characters',
  USERNAME_OR_PASSWORD_INVALID = 'Username or password invalid',
}