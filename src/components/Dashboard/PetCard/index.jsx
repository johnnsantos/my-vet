import { Card, CardActions, CardContent, IconButton } from "@mui/material"
import { Create } from "@mui/icons-material"
import { EditArea, StyledChip } from './style'
import PetHeader from "./PetHeader"
import PetInformation from "./PetInformation"
import { useEffect } from "react"

const PetCard = (props) => {

	return (
		<Card elevation={2} sx={{ mb: 2, cursor: props.petpage ? 'default' : 'pointer' }}>
			{props.petpage ? null : (
				<EditArea>
					<IconButton aria-label="edit">
						<Create />
					</IconButton>
				</EditArea>
			)}
			<CardContent sx={{ width: '90%', display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', justifyContent: 'center' }}>
				<PetHeader {...props} />
				<PetInformation {...props} />
			</CardContent>
			{props.petpage ? null : (
				<CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<StyledChip {...props}>
						{props.healthy ? 'Saúde em dia' : 'Controle atrasado'}
					</StyledChip>
				</CardActions>
			)}
		</Card>
	)
}

export default PetCard