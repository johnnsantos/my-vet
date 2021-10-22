import { Route } from "react-router"

const PublicRoute = (props) => {
	const { component: RenderComponent, ...rest } = props;
	return (
		<Route {...rest} render={props => <RenderComponent {...props} />} />
	)
}

export default PublicRoute