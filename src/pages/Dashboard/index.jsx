import DashboardHeader from "../../components/Dashboard/DashboardHeader"
import DashboardMenu from "../../components/Dashboard/DashboardMenu"
import PageName from "../../components/Dashboard/PageName"
import PetManagement from "../../components/Dashboard/PetManagement"

const Dashboard = () => {
	return (
		<>
			<DashboardHeader />
			<DashboardMenu />
			<PageName />
			<PetManagement />
		</>
	)
}

export default Dashboard