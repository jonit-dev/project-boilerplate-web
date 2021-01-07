import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { wrapper } from "../store/store";
import { GlobalStyled } from "../styles/global.styles";

function MyApp({ Component, pageProps }) {
  const store: any = useStore();
  return (
    <GlobalStyled.Container suppressHydrationWarning={true}>
      {process.browser ? (
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
          <Component {...pageProps} />
        </PersistGate>
      ) : (
        <Component {...pageProps} />
      )}
    </GlobalStyled.Container>
  );
}

export default wrapper.withRedux(MyApp);
