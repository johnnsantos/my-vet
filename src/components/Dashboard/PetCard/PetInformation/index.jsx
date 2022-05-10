import { InformationContainer } from './style'

const PetInformation = ({ sex, weight, breed, age }) => {
	return (
		<InformationContainer>
			<div className="info sex">
				<span className="info-title">
					SEXO
				</span>
				<span className="info-content">
					{sex}
				</span>
			</div>
			<div className="info breed">
				<span className="info-title">
					RAÇA
				</span>
				<span className="info-content">
					{breed.name}
				</span>
			</div>
			<div className="info weight">
				<span className="info-title">
					PESO(KG)
				</span>
				<span className="info-content">
					{weight}
				</span>
			</div>
			<div className="info age">
				<span className="info-title">
					IDADE
				</span>
				<span className="info-content">
					{age}
				</span>
			</div>
		</InformationContainer>
	)
}

export default PetInformation