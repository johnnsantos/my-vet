import { Card } from "@material-ui/core"
import { VaccineTitle } from './style'
import vaccine from '../../../assets/images/PetManagement/vaccine.svg'
import CardControl from "../CardControl"

const VaccineControl = ({ controls }) => {
	return (
		<Card sx={{ my: 2 }}>
			<VaccineTitle>
				<img src={vaccine} alt='Controle de parasitas' />
				Vacinas
			</VaccineTitle>
			{controls && controls.vaccines.map((vaccine, index, arr) => <CardControl key={index} {...vaccine} isLastCard={arr.length - 1 === index} />)}
		</Card>
	)
}

export default VaccineControl