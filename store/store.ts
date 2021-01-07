import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers/index.reducer";

const makeConfiguredStore = (reducer) =>
  createStore(reducer, undefined, applyMiddleware(thunk));

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    // we need it only on client side
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["userReducer"], // make sure it does not clash with server keys
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: any = makeConfiguredStore(persistedReducer);

    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
