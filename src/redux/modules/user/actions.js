import { USER_INFO } from "./types";

export const handleUser = (userInfo) => {
	return {
		type: USER_INFO,
		userInfo
	};
};