export interface IUser {
  name: string;
  email: string;
  address?: string;
  phone?: string;
}

export interface INewUser extends IUser {
  password: string;
  passwordConfirmation: string;
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
  Register = "UserRegister",
  Login = "UserLogin",
  RefreshInfo = "UserRefreshInfo",
  Clear = "UserClear",
  GoogleOAuthStoreToken = "UserGoogleOAuthStoreToken",
  ForgotPassword = "ForgotPassword",
}

// Dispatch actions

export interface IDispatchUserForgotPassword {
  type: UserActionTypes.ForgotPassword;
  payload: string;
}
export interface IDispatchUserGoogleOAuthStoreToken {
  type: UserActionTypes.GoogleOAuthStoreToken;
  payload: IUserLoginPayload;
}
export interface IDispatchUserInfo {
  type: UserActionTypes.RefreshInfo;
  payload: IUser;
}

export interface IDispatchUserRefresh {
  type: UserActionTypes.RefreshInfo;
  payload: IUser;
}

export interface IDispatchUserLogin {
  type: UserActionTypes.Login;
  payload: IUserLoginPayload;
}

export interface IDispatchUserRegister {
  type: UserActionTypes.Register;
  payload: IUser;
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
