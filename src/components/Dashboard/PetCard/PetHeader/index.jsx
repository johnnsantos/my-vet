import { Avatar } from "@mui/material"
import { PetName, Specie } from "./style"
import rex from '../../../../assets/images/PetCard/rex.png'
import luna from '../../../../assets/images/PetCard/luna.png'

const PetHeader = (props) => {
	return (
		<>
			<Avatar sx={{ width: '50%', height: '50%' }} src={props.rex ? rex : luna} />
			<PetName>
				{props.rex ? 'Rex' : 'Luna'}
			</PetName>
			<Specie>
				Ciro Bottini
			</Specie>
		</>
	)
}

export default PetHeader