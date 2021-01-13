import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers/index.reducer";

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const isServer = typeof window === "undefined";

// Redux devtools
const composeEnhancers = isServer
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Client-side store requirements

const storage = require("redux-persist/lib/storage").default;

const persistConfig = {
  key: "nextjs",
  whitelist: ["userReducer"], // make sure it does not clash with server keys
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeConfiguredStore = (reducer) =>
  createStore(reducer, undefined, composeEnhancers(applyMiddleware(thunk)));

export const store: any = makeConfiguredStore(persistedReducer);
store.__persistor = persistStore(store); // Nasty hack

const makeServerStore = () => makeConfiguredStore(rootReducer);

const makeStore = () => {
  if (isServer) {
    return makeServerStore();
  } else {
    return store;
  }
};

export const wrapper = createWrapper(makeStore);
