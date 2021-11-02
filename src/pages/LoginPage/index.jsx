import LoginForm from '../../components/LoginForm'
import { StyledGrid } from './style'
import Grid from "@material-ui/core/Grid";
import Footer from '../../components/LoginForm/Footer'

const LoginPage = () => {
	
	window.intercomSettings = {
		app_id: 'avzy2hbm',
	};
	
	window.Intercom('update');	

	return (
		<StyledGrid
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-end">
			<Grid item xs={10} md={8} lg={8}>
				<LoginForm />
			</Grid>
			<Grid item xs={12} md={8} lg={8}>
				<Footer />
			</Grid>
		</StyledGrid >
	)
}

export default LoginPage