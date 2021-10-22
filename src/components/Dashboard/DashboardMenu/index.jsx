import { StyledPaper } from "./style"
import { RouterLink } from '../../../utils/theme'

const DashboardMenu = () => {
	return (
		<StyledPaper elevation={4}>
			<div className="wrapper">
				<RouterLink to='/dashboard'>
					Meus pets
				</RouterLink>
			</div>
		</StyledPaper>
	)
}

export default DashboardMenu