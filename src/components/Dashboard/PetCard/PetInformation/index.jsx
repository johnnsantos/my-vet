import { InformationContainer } from './style'

const PetInformation = (props) => {
	return (
		<InformationContainer>
			<div className="info sex">
				<span className="info-title">
					SEXO
				</span>
				<span className="info-content">
					Macho
					castrado
				</span>
			</div>
			<div className="info breed">
				<span className="info-title">
					RAÇA
				</span>
				<span className="info-content">
					Affegan
					hound
				</span>
			</div>
			<div className="info weight">
				<span className="info-title">
					PESO(KG)
				</span>
				<span className="info-content">
					13
				</span>
			</div>
			<div className="info age">
				<span className="info-title">
					IDADE
				</span>
				<span className="info-content">
					5
				</span>
			</div>
		</InformationContainer>
	)
}

export default PetInformation