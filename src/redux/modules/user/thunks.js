import { handleUser } from "./actions";

const signupIntercom = (userInfo) => {
	if (userInfo) {
		let settings = {
			app_id: 'avzy2hbm',
			name: userInfo.username,
			email: userInfo.email,
			user_id: userInfo.id,
		}

		window.intercomSettings = settings
		window.Intercom('update');
	}
	else {
		window.Intercom('shutdown')
	}

}

export const handleUserThunk = (userInfo) => async (dispatch, _getState) => {
	dispatch(handleUser(userInfo));
	localStorage.setItem('userInfo', JSON.stringify(userInfo))
	signupIntercom(userInfo)
};
