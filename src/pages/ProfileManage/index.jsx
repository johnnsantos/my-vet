import { Container, Grid } from "@material-ui/core"
import DashboardHeader from "../../components/Dashboard/DashboardHeader"
import DashboardMenu from "../../components/Dashboard/DashboardMenu"
import PageName from "../../components/Dashboard/PageName"
import CardProfile from "./CardProfile"
import ProfileManageArea from "./ProfileManageArea"
import { useEffect, useState } from "react"

const ProfileManage = () => {
	const [userInfo, setUserInfo] = useState({})

	useEffect(() => {
		let { userInfo } = JSON.parse(localStorage.getItem('userInfo'))
		setUserInfo(userInfo)
	}, [])

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