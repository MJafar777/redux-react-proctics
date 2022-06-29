import { applyMiddleware, compose, createStore } from "redux";
import FormReducers, { initialState } from "./reducers/FormReducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  FormReducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
