import { Header } from "./style"
import logoHeader from '../../../assets/images/Header/logoHeader.png'
import avatar from '../../../assets/images/Header/avatar.png'
import { Avatar } from "@material-ui/core"

const DashboardHeader = () => {
	return (
		<Header>
			<div className='container'>
				<a href="#">
					<img alt='Guia Vet' src={logoHeader} />
				</a>
				<div className="user-profile">
					<Avatar
						alt="Ciro Bottini"
						src={avatar}
					/>
					<span className="username">
						Ciro Bottini
					</span>
				</div>
			</div>
		</Header>
	)
}

export default DashboardHeader