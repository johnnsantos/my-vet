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

const PetPage = () => {
	return (
		<>
			<DashboardHeader />
			<DashboardMenu />
			<PageName name={'Meus pets'} sufix={'Rex'} />
			<PetsWrapper>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="flex-start"
					spacing={6}
				>
					<Grid item xs={12} sm={10} md={4} lg={3}>
						<PetCard petpage />
					</Grid>
					<Grid item xs={12} sm={10} md={6} lg={9}>
						<RefreshArea>
							<PrimaryButton startIcon={<Update />}>
								ATUALIZAR
							</PrimaryButton>
						</RefreshArea>
						<Box>
							<ParasiteControl />
						</Box>
						<Box mt={10}>
							<VaccineControl />
						</Box>
					</Grid>
				</Grid>
			</PetsWrapper>
		</>
	)
}

export default PetPage