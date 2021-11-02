import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useSelector } from "react-redux"
import { PrimaryButton } from "../../../utils/theme"
import { PetControl, StyledGrid } from './style'
import PetCard from "../PetCard"
import EmptyBanner from "../EmptyBanner"
import { Modal, Box, Typography, Grid } from "@mui/material"
import { Container, CircularProgress } from "@material-ui/core"
import { AddCircle } from "@mui/icons-material"

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

const PetManagement = ({ loading, animalsList }) => {
	const history = useHistory()
	const state = useSelector((state) => state)
	const [open, setOpen] = useState(false)

	//const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handlePetPage = (id) => {
		history.push(`/pet/${id}`)
	}

	const handleOpen = () => {
		window.Intercom('show');
	}


	if (loading) {
		return (
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '100vh' }}
			>
				<Grid item xs={12} sm={12} md={12} lg={12} >
					<CircularProgress />
				</Grid>
			</Grid>
		)
	}

	return (
		<Container>
			<StyledGrid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
				spacing={3}
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
						Adicionar novo pet
					</PrimaryButton>
				</PetControl>
				{animalsList.length === 0 ? (
					<EmptyBanner />
				) : (
					<>
						{animalsList.map((pet) => (
							<Grid key={pet.id} item xs={12} sm={12} md={6} lg={4} onClick={() => handlePetPage(pet.id)}>
								<PetCard {...pet} />
							</Grid>
						))}
					</>
				)}
			</StyledGrid>
		</Container>
	)
}

export default PetManagement