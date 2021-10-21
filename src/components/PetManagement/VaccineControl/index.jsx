import { Card } from "@material-ui/core"
import { VaccineTitle } from './style'
import vaccine from '../../../assets/images/PetManagement/vaccine.svg'
import CardControl from "../CardControl"

const vaccines = [
	{
		name: 'Antirrábica ',
		lastDose: 'Nome do produto - 4 out 2021',
		progress: 70,
		regularity: 'regular',
		time: '180',
		highlight: true,
		hasStartedProtocol: true
	},
	{
		name: 'Leishmaniose',
		lastDose: 'Nome do produto - 4 out 2021',
		progress: 30,
		regularity: 'warning',
		time: '02',
		highlight: false,
		hasStartedProtocol: true
	},
	{
		name: 'Múltipla ou Polivalente (V8/V10)',
		lastDose: 'Nome do produto - 4 out 2021',
		progress: 30,
		regularity: 'warning',
		time: '02',
		highlight: false,
		hasStartedProtocol: false
	},
	{
		name: 'Tosse dos Canis',
		lastDose: 'Nome do produto - 4 out 2021',
		progress: 70,
		regularity: 'success',
		time: '180',
		highlight: false,
		hasStartedProtocol: true
	},
	{
		name: 'Giárdia',
		lastDose: 'Nome do produto - 4 out 2021',
		progress: 70,
		regularity: 'success',
		time: '180',
		highlight: false,
		hasStartedProtocol: true
	},
	{
		name: 'Dirofilariose',
		lastDose: 'Nome do produto - 4 out 2021',
		progress: 70,
		regularity: 'success',
		time: '180',
		highlight: false,
		hasStartedProtocol: false
	}
]


const VaccineControl = (props) => {
	return (
		<Card sx={{ my: 2 }}>
			<VaccineTitle>
				<img src={vaccine} alt='Controle de parasitas' />
				Vacinas
			</VaccineTitle>
			{vaccines.map((vaccine, index, arr) => <CardControl {...vaccine} isLastCard={arr.length - 1 === index} />)}
		</Card>
	)
}

export default VaccineControl