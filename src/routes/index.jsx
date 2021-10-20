import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={LoginPage} />
			</Switch>
		</>
	);
};

export default Routes;
