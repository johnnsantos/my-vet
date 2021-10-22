import { Grid } from "@material-ui/core"
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
			<Grid
				style={{ margin: '0 auto' }}
				container
				direction="row"
				justifyContent="center"
				alignItems="flex-start"
				spacing={6}
				lg={8}
			>
				<Grid item xs={12} sm={12} md={6} lg={4} style={{ maxWidth: '360px' }}>
					<CardProfile {...userInfo} />
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<ProfileManageArea {...userInfo} />
				</Grid>
			</Grid>
		</>
	)
}

export default ProfileManage