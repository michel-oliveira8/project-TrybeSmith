export interface User {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserWithId extends User {
  id: number,
}

export interface CodeResponse {
  code?: number
  error?: string
}