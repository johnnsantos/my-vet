import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import User from "./modules/user/reducers";
import Animals from "./modules/animals/reducers";

const reducers = combineReducers({
	User,
	Animals
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;