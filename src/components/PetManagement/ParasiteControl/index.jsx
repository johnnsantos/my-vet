import { Card } from "@material-ui/core"
import { ParasiteTitle } from './style'
import parasitecontrol from '../../../assets/images/PetManagement/medicine.svg'
import CardControl from "../CardControl"

const parasites = [
	{
		name: 'Vermífugo',
		lastDose: 'Nome do produto - 4 out 2021',
		progress: 70,
		regularity: 'regular',
		time: '30',
		highlight: true,
		hasStartedProtocol: true
	},
	{
		name: 'Pulgas e carrapatos',
		lastDose: 'Nome do produto - 4 out 2021',
		progress: 30,
		regularity: 'warning',
		time: '01',
		highlight: false,
		hasStartedProtocol: true
	}
]


const ParasiteControl = (props) => {
	return (
		<Card sx={{ my: 2 }}>
			<ParasiteTitle>
				<img src={parasitecontrol} alt='Controle de parasitas' />
				Controle de parasitas
			</ParasiteTitle>
			{parasites.map((parasite, index, arr) => <CardControl {...parasite} isLastCard={arr.length - 1 === index} />)}
		</Card>
	)
}

export default ParasiteControl