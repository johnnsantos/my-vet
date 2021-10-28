import { Avatar } from "@mui/material"
import { PetName, Specie } from "./style"
import placeholderDog from "../../../../assets/images/placeholder-dog.svg"
import placeholderCat from "../../../../assets/images/placeholder-cat.svg"

const PetHeader = ({ photo, name, owner, specie }) => {
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
				{owner}
			</Specie>
		</>
	)
}

export default PetHeader