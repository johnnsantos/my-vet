import { Grid } from "@mui/material"
import { PrimaryButton } from "../../../utils/theme"
import { AddCircle } from "@mui/icons-material"
import { PetControl } from './style'
import { useState } from 'react'
import { Modal, Box, Typography } from "@mui/material"
import PetCard from "../PetCard"

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};

const PetManagement = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<Grid
			sx={{
				maxWidth: '1300px',
				margin: '0 auto'
			}}
			container
			direction="row"
			justifyContent="flex-start"
			alignItems="flex-start"
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
			<Grid
				sx={{
					maxWidth: '1300px'
				}}
				container
				direction="row"
				justifyContent="flex-start"
				alignItems="flex-start"
				spacing={6}
			>
				<Grid item xs={8} sm={8} md={6} lg={3}>
					<PetCard rex />
				</Grid>
				<Grid item xs={8} sm={8} md={6} lg={3}>
					<PetCard regular />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default PetManagement