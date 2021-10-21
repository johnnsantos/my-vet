import { Card, CardContent, IconButton } from "@mui/material"
import { ProfileManageContent } from "./style"
import TextField from '@mui/material/TextField';
import { AttachFile } from "@mui/icons-material";
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { SaveButton, DisableButton, DisableAccount } from './style'

const ProfileManageArea = () => {
	const [profile, setProfile] = useState('Tutor')

	const handleUpload = () => {
		console.log('upou')
	}

	const handleSelect = (e) => {
		setProfile(e.target.value)
	}

	return (
		<>
			<Card>
				<CardContent>
					<ProfileManageContent>
						<span className="title">
							Perfil do pet
						</span>
						<form>
							<div className='wrapper'>
								<div className='image-upload'>
									<TextField
										helperText="Imagens de até 400x400 até 2MB"
										sx={{ width: '100%', '& .MuiFormHelperText-root': { marginLeft: 0 } }}
										id="outlined-read-only-input"
										label="Sua imagem de perfil"
										defaultValue="img_ciro.jpg"
										InputProps={{
											readOnly: true,
											endAdornment:
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleUpload}
													edge="end"
												>
													<AttachFile />
												</IconButton>
										}}
									/>
								</div>
								<div className="row">
									<TextField
										sx={{ width: '100%' }}
										defaultValue='Ciro Bottini'
										label="Nome"
									/>
									<Box sx={{ width: '100%' }}>
										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">Perfil</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												defaultValue='Tutor'
												value={profile}
												label="Perfil"
												onChange={handleSelect}
											>
												<MenuItem value={'Tutor'}>Tutor</MenuItem>
												<MenuItem value={'Amigo'}>Amigo</MenuItem>
												<MenuItem value={'Colega'}>Colega</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</div>
								<div className="row">
									<TextField
										sx={{ width: '100%' }}
										defaultValue='+55 33 33333 3333'
										label="Celular"
									/>
									<TextField
										sx={{ width: '100%' }}
										defaultValue='c.bot@email.com'
										label="E-mail"
									/>
								</div>
								<div className="row">
									<TextField
										sx={{ width: '100%' }}
										defaultValue='23 agosto de 1976'
										label="Data de nascimento"
									/>
									<div style={{ content: '', width: '100%' }}></div>
								</div>
								<div className="row-submit">
									<SaveButton>
										SALVAR
									</SaveButton>
								</div>
							</div>
						</form>
					</ProfileManageContent>
				</CardContent>
			</Card>
			<DisableAccount>
				<DisableButton>
					DESATIVAR MINHA CONTA
				</DisableButton>
			</DisableAccount>
		</>
	)
}

export default ProfileManageArea