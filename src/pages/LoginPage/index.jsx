import LoginForm from '../../components/LoginForm'
import { StyledGrid } from './style'
import { Grid } from '@material-ui/core'

const LoginPage = () => {
	return (
		<StyledGrid
			container
			direction="row"
			justifyContent="center"
			alignItems="center">
			<Grid item xs={6} md={8} lg={8}>
				<LoginForm />
			</Grid>
		</StyledGrid >
	)
}

export default LoginPage