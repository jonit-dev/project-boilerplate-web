export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: string;
  phone: string;
  website: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export enum UserActionTypes {
  loginUser,
  registerUser,
}

export interface IUserAccessToken {
  accessToken: string;
}

export enum UserActionTypes {
  Register = "Register",
  Login = "Login",
  RefreshInfo = "RefreshInfo",
  Logout = "Logout",
}

// Dispatch actions

export interface IDispatchUserInfo {
  type: UserActionTypes.RefreshInfo;
  payload: IUser;
}

export interface IDispatchUserLogin {
  type: UserActionTypes.Login;
  payload: IUserAccessToken;
}

export interface IDispatchUserLogout {
  type: UserActionTypes.Logout;
}

export interface IDispatchUserRegister {
  type: UserActionTypes.Register;
}

// this is used inside our reducer
export type UserAction =
  | IDispatchUserRegister
  | IDispatchUserLogin
  | IDispatchUserInfo
  | IDispatchUserLogout;
