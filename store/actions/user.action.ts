import { Dispatch } from "react";

import { APIHelper } from "../../libs/APIHelper";
import { IDispatchUserLogin, IUserAccessToken, IUserCredentials, UserActionTypes } from "../../types/user.types";

export const userLogin = (credentials: IUserCredentials) => async (
  dispatch: Dispatch<IDispatchUserLogin>
) => {
  const response = await APIHelper.apiRequest<IUserAccessToken>(
    "GET",
    "/auth/signin",
    credentials
  );
  dispatch({
    type: UserActionTypes.Login,
    payload: response.data,
  });
};
