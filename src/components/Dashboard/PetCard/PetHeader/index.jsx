import { Avatar } from "@mui/material"
import { PetName, Specie } from "./style"
import placeholderDog from "../../../../assets/images/placeholder-dog.svg"
import placeholderCat from "../../../../assets/images/placeholder-cat.svg"

const PetHeader = ({ photo, name, breed, specie }) => {
	return (
		<>
			<Avatar
				sx={{ minWidth: '130px', minHeight: '130px' }}
				src={specie === 'dog' ? placeholderDog : placeholderCat }
			/>
			<PetName>
				{name}
			</PetName>
			<Specie>
				{breed}
			</Specie>
		</>
	)
}

export default PetHeader