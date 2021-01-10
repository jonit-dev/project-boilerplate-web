import React from "react";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { wrapper } from "../store/store";
import { Global__ } from "../styles/global.styles";

// pages/_app.tsx
export default wrapper.withRedux(({ Component, pageProps }) => {
  const store: any = useStore();
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
