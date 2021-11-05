import { Avatar } from "@mui/material"
import { PetName, Specie } from "./style"
import placeholderDog from "../../../../assets/images/placeholder-dog.svg"
import placeholderCat from "../../../../assets/images/placeholder-cat.svg"
import { useEffect } from "react"

const PetHeader = ({ species, name, breed }) => {
	return (
		<>
			<Avatar
				sx={{ minWidth: '130px', minHeight: '130px' }}
				src={species.toLowerCase() === 'dog' ? placeholderDog : placeholderCat}
			/>
			<PetName>
				{name}
			</PetName>
			<Specie>
				{breed.species}
			</Specie>
		</>
	)
}

export default PetHeader