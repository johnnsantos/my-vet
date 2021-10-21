import { PageNameContainer } from "./style"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PageName = (props) => {
	return (
		<PageNameContainer>
			<span className='pagename'>
				{props.sufix ? (
					<span style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
						{props.name} <ChevronRightIcon sx={{ mx: 1 }} /> {props.sufix}
					</span>
				) : (
					<span>
						{props.name}
					</span>
				)}
			</span>
		</PageNameContainer>
	)
}

export default PageName