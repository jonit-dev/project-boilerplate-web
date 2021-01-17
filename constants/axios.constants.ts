import { HttpStatus } from "@project-boilerplate/shared/dist";
import axios from "axios";

import { APIHelper } from "../libs/APIHelper";
import { TS } from "../libs/TranslationHelper";
import { showAlert } from "../store/actions/ui.action";
import { userLogout } from "../store/actions/user.action";
import { IUserReducer } from "../store/reducers/user.reducer";
import { store } from "../store/store";
import { IAPIError } from "../types/api.types";
import { app } from "./env";

const apiAxios = axios.create({
  baseURL: app.general.apiUrl,
});

apiAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // First check should be if the server is actually online. If not, show error and send him to login
    if (!error.response) {
      console.log("Connection error!");
      store.dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("global", "connectionError")
        )
      );

      //Clear user info and force a logout by redirecting him to auth
      // store.dispatch(userLogout());

      return;
    }

    // Then we start checking the message payload...

    if (error.response) {
      const errorResponse: IAPIError = error.response.data;

      const userReducer: IUserReducer = store.getState().userReducer;

      // Standard generic auth error messages
      if (userReducer.auth) {
        switch (errorResponse.statusCode) {
          case HttpStatus.Unauthorized:
          case HttpStatus.Forbidden:
            if (!errorResponse.message.includes("Invalid credentials")) {
              store.dispatch(
                showAlert(
                  TS.translate("auth", "pleaseLogin"),
                  TS.translate("auth", "couldntAuthenticate")
                )
              );
              store.dispatch(userLogout());
            }

            break;
          default:
            console.log(error);
            break;
        }
      }

      // Custom error messages handling

      const errorMessage = APIHelper.handleErrorMessage(errorResponse.message);

      store.dispatch(showAlert(TS.translate("global", "oops"), errorMessage));
    }
    return Promise.reject(error);
  }
);

export { apiAxios };
