import { Route } from 'react-router-dom'
import { Redirect } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
	const token = () => window.localStorage.getItem("authorizationToken");

	return (
		<Route {...rest} render={() => {
			return token()
				? children
				: <Redirect to='/login' />
		}} />
	)
}

export default PrivateRoute