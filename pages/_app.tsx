// pages/_app.tsx
import React from "react";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { wrapper } from "../store/store";
import { GlobalStyled } from "../styles/global.styles";


export default wrapper.withRedux(({ Component, pageProps }) => {
  const store: any = useStore();
  return (
    <GlobalStyled.Container suppressHydrationWarning={true}>
      <Provider store={store}>
        {process.browser ? (
          <PersistGate loading={null} persistor={store.__persistor}>
            <Component {...pageProps} />
          </PersistGate>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </GlobalStyled.Container>
  );
});
