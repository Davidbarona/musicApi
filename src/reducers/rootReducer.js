import { combineReducers } from "redux";
import { genresReducer } from "./genresReducer";
import { homeReducer } from "./homeReducers";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  //ej: ui: uiReducer, <- importamos el reducer
  homeReducer: homeReducer,
  searchReducer : searchReducer,
  genresReducer : genresReducer
});
