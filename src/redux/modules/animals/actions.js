import { ANIMALS } from "./types";

export const handleAnimals = (animalsInfo) => {
	return {
		type: ANIMALS,
		animalsInfo
	};
};