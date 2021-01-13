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

export interface IUserLoginPayload {
  accessToken: string;
  refreshToken: string;
}

export enum UserActionTypes {
  Register = "Register",
  Login = "Login",
  RefreshInfo = "RefreshInfo",
  Clear = "Clear",
  GoogleOAuthStoreToken = "GoogleOAuthStoreToken",
}

// Dispatch actions

export interface IDispatchUserGoogleOAuthStoreToken {
  type: UserActionTypes.GoogleOAuthStoreToken;
  payload: IUserLoginPayload;
}
export interface IDispatchUserInfo {
  type: UserActionTypes.RefreshInfo;
  payload: IUser;
}

export interface IDispatchUserLogin {
  type: UserActionTypes.Login;
  payload: IUserLoginPayload;
}

export interface IDispatchUserClear {
  type: UserActionTypes.Clear;
}

export interface IDispatchUserRegister {
  type: UserActionTypes.Register;
}

// this is used inside our reducer
export type UserAction =
  | IDispatchUserRegister
  | IDispatchUserLogin
  | IDispatchUserGoogleOAuthStoreToken
  | IDispatchUserInfo
  | IDispatchUserClear;
