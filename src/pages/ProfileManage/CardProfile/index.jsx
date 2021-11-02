import { Card, CardContent, Avatar } from "@mui/material"
import { UserDetails } from './style'

const CardProfile = ({ first_name, last_name, photoUrl }) => {
	return (
		<Card>
			<CardContent>
				<UserDetails>
					<Avatar src={photoUrl} alt={first_name} sx={{ minWidth: '100px', minHeight: '100px' }} />
					<span className="username">
						{`${first_name} ${last_name}`}
					</span>
				</UserDetails>
			</CardContent>
		</Card>
	)
}

export default CardProfile