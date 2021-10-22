import { StyledPaper } from "./style"
import { RouterLink } from '../../../utils/theme'
import { Container } from "@material-ui/core"

const DashboardMenu = () => {
	return (
		<StyledPaper elevation={4}>
			<Container>
				<RouterLink to='/dashboard'>
					Meus pets
				</RouterLink>
			</Container>
		</StyledPaper>
	)
}

export default DashboardMenu