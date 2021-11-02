import { Banner } from './style'
import emptyPets from '../../../assets/images/Dashboard/emptypets.svg'

const EmptyBanner = () => {
	return (
		<Banner>
			<img alt='Adicione um pet' src={emptyPets} />
			<p>
				Você ainda não cadastrou nenhum pet adicione as informações do seu gato ou cachorro!
			</p>
		</Banner>
	)
}

export default EmptyBanner