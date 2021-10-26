import { Container } from "@material-ui/core";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { RouterLink } from "../../../utils/theme";

const PageName = (props) => {
	return (
		<Container>
			<div className='pagename' style={{ marginTop: '20px' }}>
				{props.sufix ? (
					<span style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
						<RouterLink to='/dashboard'>{props.name}</RouterLink> <ChevronRightIcon sx={{ mx: 1 }} /> {props.sufix}
					</span>
				) : (
					<span>
						{props.name}
					</span>
				)}
			</div>
		</Container>
	)
}

export default PageName