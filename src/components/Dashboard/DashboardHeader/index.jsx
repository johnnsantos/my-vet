import { Header } from "./style"
import logoHeader from '../../../assets/images/Header/logoHeader.png'
import avatar from '../../../assets/images/Header/avatar.png'
import { Avatar, Menu, MenuItem, ListItemIcon } from "@material-ui/core"
import { useState } from "react"
import { Settings, Logout } from "@mui/icons-material"

const DashboardHeader = () => {
	const [anchorEl, setAnchorEl] = useState(null)

	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Header>
			<div className='container'>
				<a href="#">
					<img alt='Guia Vet' src={logoHeader} />
				</a>
				<div onClick={handleClick} className="user-profile">
					<Avatar
						alt="Ciro Bottini"
						src={avatar}
					/>
					<span className="username">
						Ciro Bottini
					</span>
				</div>
			</div>
			<Menu
				style={{ 'top': '40px' }}
				variant='menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 2
				}}
			>
				<MenuItem>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Meu perfil
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Sair
				</MenuItem>
			</Menu>
		</Header>
	)
}

export default DashboardHeader