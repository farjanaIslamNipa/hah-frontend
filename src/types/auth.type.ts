export type TUser = {
  "email": string;
  "iat": number;
  "exp": number;
}

export type TAuthState = {
  username: null | string;
  user: null | TUser;
  token: null | string;
}

export type TUserInfo = {
  _id: string;
  name: string;
  email: string;

}

export type JwtPayload = {
  "email": string;
  "iat": number;
  "exp": number;
}