import { Grid } from "@mui/material"
import { PrimaryButton } from "../../../utils/theme"
import { AddCircle } from "@mui/icons-material"
import { PetControl, StyledGrid } from './style'
import { useState } from 'react'
import { Modal, Box, Typography } from "@mui/material"
import PetCard from "../PetCard"
import EmptyBanner from "../EmptyBanner"
import { useEffect } from "react"
import { Redirect } from "react-router"
import { useHistory } from "react-router"

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '70vw',
	maxWidth: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};

const PetManagement = (props) => {
	const history = useHistory()
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [pets, setPets] = useState([])

	const handlePetPage = (id) => {
		history.push(`/pet/${id}`)
	}

	useEffect(() => {
		let { userPets } = JSON.parse(localStorage.getItem('userInfo'))
		setPets(userPets)
	}, [])

	return (
		<StyledGrid
			container
			direction="row"
			justifyContent="flex-start"
			alignItems="flex-start"
			spacing={3}
			sx={{ margin: '0 auto' }}
		>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Adicionar novo pet
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Formulário de adicionar pet.
					</Typography>
				</Box>
			</Modal>
			<PetControl>
				<PrimaryButton onClick={handleOpen} startIcon={<AddCircle />}>
					ADICIONAR NOVO PET
				</PrimaryButton>
			</PetControl>
			{pets.length === 0 ? (
				<EmptyBanner />
			) : (
				<>
					{pets.map((pet) => (
						<Grid key={pet.id} item xs={11} sm={10} md={6} lg={3} onClick={() => handlePetPage(pet.id)}>
							<PetCard {...pet} />
						</Grid>
					))}
				</>
			)}
		</StyledGrid>
	)
}

export default PetManagement