import { Header, MobileMenu, DrawerHeader } from "./style"
import logoHeader from '../../../assets/images/Header/logoHeader.png'
import logoMobile from '../../../assets/images/Header/logoMobile.png'
import { Avatar, Menu, MenuItem, ListItemIcon } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Settings, Logout } from "@mui/icons-material"
import Drawer from '@mui/material/Drawer';
import { IconButton } from "@material-ui/core"
import MenuIcon from '@mui/icons-material/Menu'
import { ChevronLeft } from "@mui/icons-material"
import { RouterLink } from "../../../utils/theme"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { handleUserThunk } from "../../../redux/modules/user/thunks"

const drawerWidth = 200;

const DashboardHeader = () => {
	const [name, setName] = useState('')
	const [photoUrl, setPhotoUrl] = useState('')
	const [anchorEl, setAnchorEl] = useState(null)
	const [openDrawer, setOpenDrawer] = useState(false)
	const history = useHistory()
	const dispatch = useDispatch()

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

	const handleLogout = () => {
		window.localStorage.clear();
		dispatch(handleUserThunk([]));
		history.push('/login')
	}

	useEffect(() => {
		let { userInfo } = JSON.parse(localStorage.getItem('userInfo'))
		setName(userInfo.name)
		setPhotoUrl(userInfo.photoUrl)
	}, [])

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
				variant="temporary"
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
					<RouterLink to='/dashboard' className='logo-desktop'>
						<img alt='Guia Vet' src={logoHeader} />
					</RouterLink>
					<RouterLink to='/dashboard' className='logo-mobile'>
						<img alt='Guia Vet' src={logoMobile} />
					</RouterLink>
					<div onClick={handleClick} className="user-profile">
						<Avatar
							alt={name}
							src={photoUrl}
						/>
						<span className="username">
							{name}
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
						<RouterLink to='/perfil'>
							<ListItemIcon>
								<Settings fontSize="small" />
							</ListItemIcon>
							Meu perfil
						</RouterLink>
					</MenuItem>
					<MenuItem onClick={handleLogout}>
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