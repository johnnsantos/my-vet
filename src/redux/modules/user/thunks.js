import { handleUser } from "./actions";

export const handleUserThunk = (userInfo) => async (dispatch, _getState) => {
	dispatch(handleUser(userInfo));
	localStorage.setItem('userInfo', JSON.stringify(userInfo))
};
