export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: string;
  phone: string;
  website: string;
}

// Redux ========================================

export enum UserActionTypes {
  loginUser,
  registerUser,
}

export interface IUserCredentials {
  email: string;
  password: string;
}

// Actions ========================================

export interface ActionUserLogin {
  type: UserActionTypes.loginUser;
  payload: IUser;
}

export interface ActionUserRegister {
  type: UserActionTypes.registerUser;
  payload: IUser;
}

export type ActionUser = ActionUserLogin | ActionUserRegister;
