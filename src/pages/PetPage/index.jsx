import { Grid } from "@material-ui/core"
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

const PetPage = () => {
	const params = useParams()
	const [actualPet, setActualPet] = useState({})

	useEffect(() => {
		let { userPets } = JSON.parse(localStorage.getItem('userInfo'))
		for (let pet of userPets) {
			if (pet.id == params.id) {
				setActualPet(pet)
			}
		}
	}, [])

	return (
		<>
			<DashboardHeader />
			<DashboardMenu />
			<PageName name={'Meus pets'} sufix={actualPet.name} />
			<PetsWrapper>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="flex-start"
					spacing={6}
				>
					<Grid item xs={12} sm={10} md={4} lg={3}>
						<PetCard petpage {...actualPet} />
					</Grid>
					<Grid item xs={12} sm={10} md={6} lg={9}>
						<RefreshArea>
							<PrimaryButton startIcon={<Update />}>
								ATUALIZAR
							</PrimaryButton>
						</RefreshArea>
						<Box>
							{actualPet !== {} && (
								<ParasiteControl {...actualPet} />
							)}
						</Box>
						<Box mt={10}>
							{actualPet !== {} && (
								<VaccineControl {...actualPet} />
							)}
						</Box>
					</Grid>
				</Grid>
			</PetsWrapper>
		</>
	)
}

export default PetPage