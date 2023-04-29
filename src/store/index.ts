import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import filmsReducer from "./Films/reducer";
import filmsDetailReducer from "./FilmsDetail/reducer";

const rootReducer = combineReducers({
  filmsReducer,
  filmsDetailReducer,
});

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store;