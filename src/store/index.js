import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import favouritesReducer from "./reducers/favourites";
import jobsReducer from "./reducers/jobs";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favourites: {
    elements: [],
  },
  jobs: {
    elements: [],
  },
};

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  transform: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const configureStore = createStore(
  persistReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);
