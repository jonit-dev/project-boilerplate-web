import { IUser, IUserCredentials, UserActionTypes } from "../../types/user.types";

export const userLogin = (credentials: IUserCredentials) => {
  const user: IUser = {
    id: 1,
    name: "John",
    username: "johndoe",
    email: "johndoe@gmail.com",
    phone: "444121231",
    website: "https://jsonplaceholder.typicode.com/users",
  };

  return {
    type: UserActionTypes.loginUser,
    payload: user,
  };
};
