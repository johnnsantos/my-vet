import { PageNameContainer } from "./style"

const PageName = (props) => {
	return (
		<PageNameContainer>
			<span className='pagename'>
				{props.name}
			</span>
		</PageNameContainer>
	)
}

export default PageName