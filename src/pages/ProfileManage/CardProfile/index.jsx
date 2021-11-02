import { Card, CardContent, Avatar } from "@mui/material"
import { UserDetails } from './style'

const CardProfile = ({ name, photoUrl }) => {
	return (
		<Card>
			<CardContent>
				<UserDetails>
					<Avatar src={photoUrl} alt={name} sx={{ width: '40%', height: '40%', minWidth: '100px', minHeight: '100px' }} />
					<span className="username">
						{name}
					</span>
				</UserDetails>
			</CardContent>
		</Card>
	)
}

export default CardProfile