import { Card } from "@material-ui/core"
import { ParasiteTitle } from './style'
import parasitecontrol from '../../../assets/images/PetManagement/medicine.svg'
import CardControl from "../CardControl"

const ParasiteControl = ({ controls }) => {
	return (
		<Card sx={{ my: 2 }}>
			<ParasiteTitle>
				<img src={parasitecontrol} alt='Controle de parasitas' />
				Controle de parasitas
			</ParasiteTitle>
			{controls && controls.parasites.map((parasite, index, arr) => <CardControl key={index} {...parasite} isLastCard={arr.length - 2 === index} />)}
		</Card>
	)
}

export default ParasiteControl