import { USER_INFO } from "./types"

const defaultState = { userLogged: [] }

const User = (state = defaultState, action) => {
	const { userInfo, type } = action
	switch (type) {
		case USER_INFO:
			return { userLogged: userInfo }

		default:
			return {
				...state,
			}
	}
};

export default User
