import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { Header, MobileMenu, DrawerHeader } from "./style"
import logoHeader from '../../../assets/images/Header/logoHeader.png'
import logoMobile from '../../../assets/images/Header/logoMobile.png'
import { Avatar, Menu, MenuItem, ListItemIcon, Container, Grid, IconButton } from "@material-ui/core"
import { Settings, Logout, MenuIcon, ChevronLeft } from "@mui/icons-material"
import Drawer from '@mui/material/Drawer';
import { RouterLink } from "../../../utils/theme"
import { handleUserThunk } from "../../../redux/modules/user/thunks"
import { logoutUser, retrieveUserInfo, token } from "../../../services/api"
import { useSelector } from "react-redux"

// const drawerWidth = 200

const DashboardHeader = () => {
	// const history = useHistory()
	const dispatch = useDispatch()

	const [anchorEl, setAnchorEl] = useState(null)
	// const [openDrawer, setOpenDrawer] = useState(false)

	const { userLogged } = useSelector(state => state.User)

	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	// const handleDrawerOpen = () => {
	// 	setOpenDrawer(true)
	// };

	// const handleDrawerClose = () => {
	// 	setOpenDrawer(false)
	// }

	useEffect(() => {
		try {
			retrieveUserInfo(token())
				.then(res => {
					dispatch(handleUserThunk(res.data))
				})
				.catch(err => {
					console.log(err)
					logoutUser()
				})
		} catch (error) {
			console.log(error)
		}
	}, [])

	return (
		<>
			{/* <Drawer
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

			</Drawer> */}
			{/* <MobileMenu>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="end"
				>
					<MenuIcon />
				</IconButton>
			</MobileMenu> */}
			<Header>
				<Container>
					<Grid
						container
						direction="row"
						justifyContent="space-between"
						alignItems="flex-start"
						className="container"
					>
						<RouterLink to='/dashboard' className='logo-desktop'>
							<img alt='Guia Vet' src={logoHeader} />
						</RouterLink>
						<RouterLink to='/dashboard' className='logo-mobile'>
							<img alt='Guia Vet' src={logoMobile} />
						</RouterLink>
						<div onClick={handleClick} className="user-profile">
							<Avatar
								alt={userLogged.first_name}
								src={userLogged.first_name}
							/>
							<span className="username">
								{userLogged.first_name}
							</span>
						</div>
					</Grid>
				</Container>
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
					<MenuItem onClick={logoutUser}>
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