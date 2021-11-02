import { useEffect } from "react"
import DashboardHeader from "../../components/Dashboard/DashboardHeader"
import DashboardMenu from "../../components/Dashboard/DashboardMenu"
import PageName from "../../components/Dashboard/PageName"
import PetManagement from "../../components/Dashboard/PetManagement"
import { useHistory } from "react-router"
import { retrieveAnimals } from "../../services/api"
import { useDispatch } from "react-redux"
import { handleAnimalsThunk } from '../../redux/modules/animals/thunks'
import { handleUserThunk } from "../../redux/modules/user/thunks"

const Dashboard = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	useEffect(() => {
		let accessToken = history.location.state?.accessToken
		try {
			retrieveAnimals(accessToken ? accessToken : localStorage.getItem("accessToken"))
				.then(res => {
					console.log(res)
					dispatch(handleAnimalsThunk(res.data))
				})
				.catch(err => {
					console.log(err)
				})
		} catch (error) {
			console.log(error)
			window.localStorage.clear();
			dispatch(handleUserThunk([]));
			history.push('/login')
		}
	}, [])

	return (
		<>
			{/* <DashboardHeader />
			<DashboardMenu />
			<PageName name={'Meus pets'} /> */}
			<PetManagement />
		</>
	)
}

export default Dashboard