import { handleAnimals } from "./actions";

export const handleAnimalsThunk = (animalsList) => async (dispatch, _getState) => {
	dispatch(handleAnimals(animalsList));
	localStorage.setItem('animalsList', JSON.stringify(animalsList))
};
