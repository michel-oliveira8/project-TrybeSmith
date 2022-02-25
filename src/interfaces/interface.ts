export interface User {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserWithId extends User {
  id: number;
}

export interface CodeResponse {
  code?: number;
  error?: string;
}

export interface EncodeResult {
  token: string;
  expiresIn: number;
  algorithm: string;
}

export interface Payload {
  id: number;
  username: string;
}

export interface PayloadLogin {
  id: number,
  username: string,
  password: string,
}

export interface Login {
  username: string,
  password: string,
}

export interface Products {
  name: string,
  amount: string
}

export interface ProductsWithId extends Products {
  id: number,
}

export interface GetAllProduct extends ProductsWithId {
  orderId: number,
}

export interface Order {
  userId: number,
  products: [],
}