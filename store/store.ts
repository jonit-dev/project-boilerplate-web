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

const middlewares = [thunk];

// Redux devtools
const composeEnhancers = isServer
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Client-side store requirements

const storage = require("redux-persist/lib/storage").default;

const persistConfig = {
  key: "root",
  whitelist: ["userReducer"], // only counter will be persisted, add other reducers if needed
  storage, // if needed, use a safer storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

export const store: any = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
); // Creating the store again

store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(rootReducer, applyMiddleware(...middlewares));
  } else {
    return store;
  }
};

//@ts-expect-error error
export const wrapper = createWrapper(makeStore);
