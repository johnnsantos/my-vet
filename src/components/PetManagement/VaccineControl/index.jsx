import { Card } from "@material-ui/core"
import { VaccineTitle } from './style'
import vaccine from '../../../assets/images/PetManagement/vaccine.svg'
import CardControl from "../CardControl"

const VaccineControl = (props) => {
	return (
		<Card sx={{ my: 2 }}>
			<VaccineTitle>
				<img src={vaccine} alt='Controle de parasitas' />
				Vacinas
			</VaccineTitle>
			{props.petVaccines.length > 0 && props.petVaccines.map((vaccine, index, arr) => <CardControl key={index} {...vaccine} isLastCard={arr.length - 1 === index} />)}
		</Card>
	)
}

export default VaccineControl