import { Card, CardContent, Avatar } from "@mui/material"
import ciro from '../../../assets/images/UserProfile/ciro.png'
import { UserDetails } from './style'

const CardProfile = () => {
	return (
		<Card>
			<CardContent>
				<UserDetails>
					<Avatar src={ciro} alt='Ciro Bottini' sx={{ width: '40%', height: '40%' }} />
					<span className="username">
						Ciro Bottini
					</span>
				</UserDetails>
			</CardContent>
		</Card>
	)
}

export default CardProfile