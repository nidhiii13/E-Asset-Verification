import { createStore, combineReducers } from "redux";
import User from "./User";

const allReducers = combineReducers({
  User,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;