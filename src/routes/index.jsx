import { Switch } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import Dashboard from "../pages/Dashboard"
import ProfileManage from '../pages/ProfileManage'
import PetPage from "../pages/PetPage"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import { useEffect } from "react"
import { isAuthenticated } from "../services/api"
import { useHistory } from "react-router"


const Routes = () => {
	const history = useHistory()

	useEffect(() => {
		if (isAuthenticated()) {
			history.push("/dashboard")
		} else {
			history.push("/login")
		}
	}, [history])
	return (
		<Switch>
			<PrivateRoute exact path="/dashboard" component={Dashboard} />
			<PrivateRoute exact path="/perfil" component={ProfileManage} />
			<PrivateRoute exact path="/pet/:id" component={PetPage} />
			<PublicRoute exact path="/login" component={LoginPage} />
		</Switch>
	);
};

export default Routes;
