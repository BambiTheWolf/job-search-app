import { createStore, applyMiddleware, compose } from "redux";
import mainReducer from "./reducers";

import thunk from "redux-thunk";

const composeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  favourites: [],
};

export default createStore(
  mainReducer,
  initialState,
  composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
