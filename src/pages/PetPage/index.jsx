import { Container, Grid } from "@material-ui/core"
import DashboardHeader from "../../components/Dashboard/DashboardHeader"
import DashboardMenu from "../../components/Dashboard/DashboardMenu"
import PageName from "../../components/Dashboard/PageName"
import PetCard from "../../components/Dashboard/PetCard"
import { PrimaryButton } from "../../utils/theme"
import { PetsWrapper, RefreshArea } from './style'
import { Update } from "@mui/icons-material"
import ParasiteControl from '../../components/PetManagement/ParasiteControl'
import VaccineControl from '../../components/PetManagement/VaccineControl'
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { retrieveVaccines, token } from "../../services/api"

const PetPage = () => {
	const params = useParams()
	const [actualPet, setActualPet] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const [petVaccines, setPetVaccines] = useState([])

	useEffect(() => {
		retrieveVaccines(token(), params.id)
			.then(res => {
				setPetVaccines(res.data)
				setIsLoading(false)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	useEffect(() => {
		let userPets = JSON.parse(localStorage.getItem('animalsList'))
		for (let pet of userPets) {
			if (pet.id == params.id) {
				setActualPet(pet)
				// setIsLoading(false)
			}
		}
	}, [])

	if (isLoading) {
		return null
	}

	return (
		<>
			<DashboardHeader />
			<DashboardMenu />
			<PageName name={'Meus pets'} sufix={actualPet.name} />
			<Container style={{ marginTop: '20px' }}>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="flex-start"
					spacing={6}
				>
					<Grid item xs={12} sm={12} md={4} lg={3}>
						<PetCard petpage {...actualPet} />
					</Grid>
					<Grid item xs={12} sm={12} md={8} lg={9}>
						<RefreshArea>
						</RefreshArea>
						<Box>
							{actualPet !== {} && (
								<ParasiteControl {...actualPet} />
							)}
						</Box>
						<Box mt={10}>
							{actualPet !== {} && (
								<VaccineControl petVaccines={petVaccines} />
							)}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default PetPage