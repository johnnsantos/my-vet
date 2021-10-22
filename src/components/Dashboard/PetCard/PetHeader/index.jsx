import { Avatar } from "@mui/material"
import { PetName, Specie } from "./style"

const PetHeader = ({ photo, name, breed }) => {
	return (
		<>
			<Avatar sx={{ width: '60%', height: '60%', minWidth: '100px', minHeight: '100px' }} src={photo} />
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