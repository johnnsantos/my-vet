import { Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import Dashboard from "../pages/Dashboard"
import ProfileManage from '../pages/ProfileManage'
import PetPage from "../pages/PetPage"

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/login" component={LoginPage} />
			</Switch>
			<Switch>
				<Route exact path="/dashboard" component={Dashboard} />
			</Switch>
			<Switch>
				<Route exact path="/perfil" component={ProfileManage} />
			</Switch>
			<Switch>
				<Route exact path="/" component={PetPage} />
			</Switch>
		</>
	);
};

export default Routes;
