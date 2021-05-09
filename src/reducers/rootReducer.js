import { combineReducers } from "redux";
import { homeReducer } from "./homeReducers";

export const rootReducer = combineReducers({
  //ej: ui: uiReducer, <- importamos el reducer
  homeReducer: homeReducer,
});
