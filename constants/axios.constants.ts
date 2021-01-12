import { HttpStatus } from "@project-boilerplate/shared/dist";
import axios from "axios";

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
      //!Refactor!
      // store.dispatch(
      //   showAlert(
      //     TS.translate("global", "oops"),
      //     "Couldn't connect to the server. Please, check your internet connection!"
      //   )
      // );
      alert(
        "Couldn't connect to the server. Please, check your internet connection!"
      );

      //Clear user info and force a logout by redirecting him to auth
      store.dispatch(userLogout());

      if (!window.location.href.includes("login")) {
        window.location.href = "/login";
      }

      return;
    }

    // Then we start checking the message payload...

    if (error.response.data) {
      const errorResponse: IAPIError = error.response.data;

      const userReducer: IUserReducer = store.getState().userReducer;

      if (userReducer.auth) {
        switch (errorResponse.statusCode) {
          case HttpStatus.Unauthorized:
          case HttpStatus.Forbidden:
            if (!errorResponse.message.includes("Invalid credentials")) {
              // store.dispatch(
              //   showAlert(
              //     TS.translate("auth", "pleaseLogin"),
              //     TS.translate("auth", "couldntAuthenticate")
              //   )
              // );
              alert("Invalid credentials! Please login again.");
              store.dispatch(userLogout());
              if (!window.location.href.includes("login")) {
                window.location.href = "/login";
              }
            }

            break;
          default:
            console.log(error);
            break;
        }
      }
    }

    return Promise.reject(error);
  }
);

export { apiAxios };
