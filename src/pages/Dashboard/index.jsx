import { useEffect, useState } from "react"
import DashboardHeader from "../../components/Dashboard/DashboardHeader"
import DashboardMenu from "../../components/Dashboard/DashboardMenu"
import PageName from "../../components/Dashboard/PageName"
import PetManagement from "../../components/Dashboard/PetManagement"
import { useHistory } from "react-router"
import { logoutUser, retrieveAnimals } from "../../services/api"
import { useDispatch } from "react-redux"
import { handleAnimalsThunk } from '../../redux/modules/animals/thunks'

const Dashboard = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)
	const [animalsList, setAnimalsList] = useState([])

	useEffect(() => {
		let accessToken = history.location.state?.accessToken
		try {
			retrieveAnimals(accessToken ? accessToken : localStorage.getItem("accessToken"))
				.then(res => {
					dispatch(handleAnimalsThunk(res.data))
					setLoading(false)
					setAnimalsList(res.data)
				})
				.catch(err => {
					// let errorMessage = err.response.data.messages[0].message
					// console.log(errorMessage)
					console.log(err)
					logoutUser()
					// if (errorMessage.includes("invalid") || errorMessage.includes("expired")) {
					// logoutUser()
					// }
				})
		} catch (error) {
			console.log(error)
			logoutUser()
		}
	}, [])

	return (
		<>
			<DashboardHeader />
			<DashboardMenu />
			<PageName name={'Meus pets'} />
			<PetManagement loading={loading} animalsList={animalsList} />
		</>
	)
}

export default Dashboard