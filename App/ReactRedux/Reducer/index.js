import { combineReducers } from "redux";
import NavigationReducer from "./navigationReducer";

const AppReducer = combineReducers({
  navReducer: NavigationReducer
});

export default AppReducer;