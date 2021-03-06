import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TS } from "../../libs/TranslationHelper";
import { showAlert } from "../../store/actions/ui.action";
import { userLogout, userRefreshInfo } from "../../store/actions/user.action";
import { StoreState } from "../../store/reducers/index.reducer";
import { IUserReducer } from "../../store/reducers/user.reducer";

export const withAuth = (Component) => (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { auth } = useSelector<StoreState, IUserReducer>(
    (state) => state.userReducer
  );

  useEffect(() => {
    console.log("withAuth.tsx => checking user token...");

    if (auth && auth.accessToken) {
      dispatch(userRefreshInfo()); // if user has an accessToken, lets force refresh it (so he'll be redirected to auth page if the token is invalid!)
    } else {
      dispatch(userLogout()); // clear user info
      dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("auth", "loginBeforeAccessingThisPage")
        )
      );
      router.push("/auth");
      return;
    }
  }, []);

  return <Component {...props} />;
};
