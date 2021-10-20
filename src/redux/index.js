import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import User from "./modules/user/reducers";

const reducers = combineReducers({
	User
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;