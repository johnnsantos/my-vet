import { useEffect, useState } from "react"
import { Container, Grid, CircularProgress } from "@material-ui/core"
import DashboardHeader from "../../components/Dashboard/DashboardHeader"
import DashboardMenu from "../../components/Dashboard/DashboardMenu"
import PageName from "../../components/Dashboard/PageName"
import CardProfile from "./CardProfile"
import ProfileManageArea from "./ProfileManageArea"
import { useSelector } from "react-redux"

const ProfileManage = () => {
	const [loading, setLoading] = useState(true)
	const [userInfo, setUserInfo] = useState({})
	const { userLogged } = useSelector(state => state.User)

	useEffect(() => {
		if (userLogged) {
			setUserInfo(userLogged)
			setLoading(false)
		}
	}, [userLogged])

	if (loading) {
		return (
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '100vh' }}
			>
				<Grid item xs={12} sm={12} md={12} lg={12} >
					<CircularProgress />
				</Grid>
			</Grid>
		)
	}

	return (
		<>
			<DashboardHeader />
			<DashboardMenu />
			<PageName name={'Meu perfil'} />
			<Container style={{ marginTop: '20px' }}>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="flex-start"
					spacing={6}
				>
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<CardProfile {...userInfo} />
					</Grid>
					<Grid item xs={12} sm={12} md={8} lg={8}>
						<ProfileManageArea {...userInfo} />
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default ProfileManage