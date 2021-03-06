import "../styles/scss/style.scss";

import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { userRefreshInfo } from "../store/actions/user.action";
import { StoreState } from "../store/reducers/index.reducer";
import { IUserReducer } from "../store/reducers/user.reducer";
import { wrapper } from "../store/store";
import { Global__ } from "../styles/global.styles";

// pages/_app.tsx

export default wrapper.withRedux(({ Component, pageProps }) => {
  const store: any = useStore();
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn, auth, user } = useSelector<StoreState, IUserReducer>(
    (state) => state.userReducer
  );

  if (isLoggedIn && router.route === "/auth") {
    // if we're logged in and hit auth, lets just automatically redirect the user to /main
    router.push("/main");
  }

  // check if user has accessToken. If so, refresh user info when app starts!

  useEffect(() => {
    if (user && auth?.accessToken) {
      console.log("_app.tsx => triggering userRefreshInfo()...");
      dispatch(userRefreshInfo());
    }
  }, [auth]);

  // useEffect(() => {
  //   router.events.on("routeChangeStart", (url) => {
  //     const state: StoreState = store.getState();

  //     if (state.uiReducer.uiAlert !== null) {
  //       dispatch(clearAlert());
  //     }
  //   });
  // }, []);

  return (
    <Provider store={store}>
      {process.browser ? (
        <Global__.Container suppressHydrationWarning={true}>
          <PersistGate loading={null} persistor={store.__persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Global__.Container>
      ) : (
        <Global__.Container suppressHydrationWarning={true}>
          <Component {...pageProps} />
        </Global__.Container>
      )}
    </Provider>
  );
});
