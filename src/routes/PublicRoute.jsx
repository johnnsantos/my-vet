import { Route } from 'react-router-dom'
import { Redirect } from "react-router";
import { isAuthenticated } from '../services/api';

const PublicRoute = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} render={(props) => {
			return !isAuthenticated()
				? <Component {...props} />
				: <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
		}} />
	)
}

export default PublicRoute