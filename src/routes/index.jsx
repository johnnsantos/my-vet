import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/login" component={LoginPage} />
			</Switch>
			<Switch>
				<Route exact path="/" component={Dashboard} />
			</Switch>
		</>
	);
};

export default Routes;
