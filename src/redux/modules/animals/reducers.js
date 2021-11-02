import { ANIMALS } from "./types"

const defaultState = { animalsList: [] }

const Animals = (state = defaultState, action) => {
	const { myAnimals, type } = action
	switch (type) {
		case ANIMALS:
			return { animalsList: myAnimals }

		default:
			return {
				...state
			}
	}
};

export default Animals
