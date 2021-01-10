import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { tailwindExcludePaths } from "../constants/tailwind";
import { wrapper } from "../store/store";
import { Global__ } from "../styles/global.styles";

// pages/_app.tsx
export default wrapper.withRedux(({ Component, pageProps }) => {
  const router = useRouter();

  if (!tailwindExcludePaths.includes(router.pathname)) {
    require("tailwindcss/tailwind.css");
  }

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
