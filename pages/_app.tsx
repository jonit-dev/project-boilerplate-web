import "../styles/scss/style.scss";

import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Provider, useDispatch, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { clearAlert } from "../store/actions/ui.action";
import { StoreState } from "../store/reducers/index.reducer";
import { wrapper } from "../store/store";
import { Global__ } from "../styles/global.styles";

// pages/_app.tsx

export default wrapper.withRedux(({ Component, pageProps }) => {
  const store: any = useStore();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // check if user has auth

    router.events.on("routeChangeStart", (url) => {
      const state: StoreState = store.getState();

      if (state.uiReducer.uiAlert !== null) {
        dispatch(clearAlert());
      }
    });
  }, []);

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
