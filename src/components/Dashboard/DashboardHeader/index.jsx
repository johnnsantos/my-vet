import { Header, MobileMenu, DrawerHeader } from "./style"
import logoHeader from '../../../assets/images/Header/logoHeader.png'
import logoMobile from '../../../assets/images/Header/logoMobile.png'
import avatar from '../../../assets/images/Header/avatar.png'
import { Avatar, Menu, MenuItem, ListItemIcon } from "@material-ui/core"
import { useState } from "react"
import { Settings, Logout } from "@mui/icons-material"
import Drawer from '@mui/material/Drawer';
import { IconButton } from "@material-ui/core"
import MenuIcon from '@mui/icons-material/Menu'
import { ChevronLeft } from "@mui/icons-material"

const drawerWidth = 240;

const DashboardHeader = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const [openDrawer, setOpenDrawer] = useState(false)

	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleDrawerOpen = () => {
		setOpenDrawer(true)
	};

	const handleDrawerClose = () => {
		setOpenDrawer(false)
	}

	return (
		<>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={openDrawer}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeft />
					</IconButton>
				</DrawerHeader>

			</Drawer>
			<MobileMenu>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="end"
				>
					<MenuIcon />
				</IconButton>
			</MobileMenu>
			<Header>
				<div className='container'>
					<a href="#" className='logo-desktop'>
						<img alt='Guia Vet' src={logoHeader} />
					</a>
					<a href="#" className='logo-mobile'>
						<img alt='Guia Vet' src={logoMobile} />
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
		</>
	)
}

export default DashboardHeader