import { Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import Dashboard from "../pages/Dashboard"
import ProfileManage from '../pages/ProfileManage'
import PetPage from "../pages/PetPage"
import { Redirect } from "react-router"
import PrivateRoute from "./PrivateRoute"


const Routes = () => {
	return (
		<Switch>
			<Redirect exact from='/' to='/login' />
			<PrivateRoute exact path="/dashboard" component={Dashboard} />
			<PrivateRoute exact path="/perfil" component={ProfileManage} />
			<PrivateRoute exact path="/pet/:id" component={PetPage} />
			<Route exact path="/login" component={LoginPage} />
		</Switch>
	);
};

export default Routes;
