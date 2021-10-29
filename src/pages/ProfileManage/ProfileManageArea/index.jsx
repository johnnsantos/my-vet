import { Card, CardContent, IconButton, Modal, Typography } from "@mui/material"
import { ProfileManageContent } from "./style"
import TextField from '@mui/material/TextField';
import { AttachFile } from "@mui/icons-material";
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { MenuItem } from '@material-ui/core'
import { SaveButton, DisableButton, DisableAccount, CancelButton, ConfirmButton, ButtonControl } from './style'
import { useHistory } from "react-router";
import { useDispatch } from "react-redux"
import { handleUserThunk } from "../../../redux/modules/user/thunks";
import { Formik } from 'formik'
import * as Yup from 'yup'
import InputMask from "react-input-mask";

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

const ProfileManageArea = ({ cellphone, email, born, photoName }) => {
	const dispatch = useDispatch()
	const history = useHistory();
	const [profile, setProfile] = useState('Tutor')
	const [modalOpen, setModalOpen] = useState(false)
	const [formValues, setFormValues] = useState({
		formState: {
			name: 'Ciro Bottini',
			email: 'c.bot@email.com',
			cellphone: '(31) 9 9955-4452',
			born: '23/08/1976',
			photoName: 'img_ciro.jpg'
		},
		isSubmitting: false,
		success: false,
		hasError: false,
		errorMessage: '',
		successMessage: ''
	})

	const toggleModal = () => setModalOpen(!modalOpen)

	const handleUpload = () => {
		console.log('upload')
		let button = document.getElementById('imgupload')
		button.click()
	}

	const handleSelect = (e) => {
		setProfile(e.target.value)
	}

	const disableAccount = () => {
		window.localStorage.clear();
		dispatch(handleUserThunk([]));
		history.push('/login')
	}

	const { isSubmitting, success, hasError, errorMessage, successMessage } =
		formValues

	const submitForm = formData => {
		console.log(formData)
	}

	const renderForm = ({
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit
	}) => {
		return (
			<>
				<form onSubmit={handleSubmit}>
					<div className='wrapper'>
						<div className='image-upload'>
							<input type="file" id="imgupload" style={{ display: "none" }} />
							<TextField
								value={values.photoName}
								error={!!errors.email}
								onBlur={handleBlur}
								touched={touched.email}
								onClick={handleUpload}
								onChange={handleChange}
								helperText="Imagens de até 400x400 até 2MB"
								sx={{ width: '100%', '& .MuiFormHelperText-root': { marginLeft: 0 } }}
								id="photoName"
								name="photoName"
								label="Sua imagem de perfil"
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
								helperText={errors.name ? errors.name : ''}
								error={!!errors.name}
								onBlur={handleBlur}
								touched={touched.name}
								value={values.name}
								onChange={handleChange}
								sx={{ width: '100%', '& .MuiFormHelperText-root': { marginLeft: 0 } }}
								label="Nome"
								id='name'
								name='name'
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
							<InputMask
								mask="\(99\) 9 9999-9999"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.cellphone}
								disabled={false}
								maskPlaceholder="_"
							>
								{(inputProps) =>
									<TextField
										error={!!errors.cellphone}
										helperText={errors.cellphone && errors.cellphone}
										touched={touched.cellphone}
										sx={{ width: '100%', '& .MuiFormHelperText-root': { marginLeft: 0 } }}
										label="Celular"
										id='cellphone'
										name='cellphone'
										type='tel'
										disableUnderline
										{...inputProps}
									/>
								}
							</InputMask>
							<TextField
								helperText={errors.email ? errors.email : ''}
								sx={{ width: '100%', '& .MuiFormHelperText-root': { marginLeft: 0 } }}
								label="E-mail"
								error={!!errors.email}
								onBlur={handleBlur}
								touched={touched.email}
								value={values.email}
								onChange={handleChange}
								id='email'
								name='email'
							/>
						</div>
						<div className="row">
							<InputMask
								mask="99\/99\/9999"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.born}
								disabled={false}
								maskPlaceholder="_"
							>
								{(inputProps) =>
									<TextField
										sx={{ width: '100%', '& .MuiFormHelperText-root': { marginLeft: 0 } }}
										label="Data de nascimento"
										error={!!errors.born}
										touched={touched.born}
										id='born'
										name='born'
										helperText={errors.born ? errors.born : ''}
									/>
								}
							</InputMask>
							<div style={{ content: '', width: '100%' }}></div>
						</div>
						<div className="row-submit">
							<SaveButton type='submit'>
								SALVAR
							</SaveButton>
						</div>
					</div>
				</form>
			</>
		)
	}

	return (
		<>
			<Modal
				open={modalOpen}
				onClose={toggleModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<div>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Desativar minha conta
						</Typography>
						<Typography id="modal-modal-description" sx={{ my: 4, textAlign: 'center' }}>
							Tem certeza que deseja desativar sua conta?
						</Typography>
						<Typography id="modal-modal-description" sx={{ my: 4, textAlign: 'center', color: 'gray' }}>
							Explicação sobre dados ao desativar.
						</Typography>
						<ButtonControl>
							<DisableButton style={{ marginRight: '15px' }} uppercase onClick={disableAccount}>
								Tenho certeza
							</DisableButton>
							<SaveButton uppercase onClick={toggleModal}>
								Cancelar
							</SaveButton>
						</ButtonControl>
					</Box>
				</div>
			</Modal>
			<Card>
				<CardContent>
					<ProfileManageContent>
						<span className="title">
							Perfil do pet
						</span>
						<Formik
							validateOnChange
							validateOnBlur
							initialValues={formValues.formState}
							// enableReinitialize
							onSubmit={submitForm}
							render={renderForm}
							validationSchema={Yup.object().shape({
								email: Yup.string()
									.email('Por favor, insira um e-mail válido')
									.required('Por favor, insira um e-mail'),
								photoName: Yup.string(),
								cellphone: Yup.string()
									.required('Por favor, insira um celular')
									.matches(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm, 'Por favor, insira um celular válido'),
								born: Yup.string()
									.required('Por favor, insira uma data de nascimento')
									.matches(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/gm, 'Por favor, insira uma data de nascimento válida'),
								name: Yup.string()
									.required('Por favor, insira um nome'),
							})}
						/>
					</ProfileManageContent>
				</CardContent>
			</Card>
			<DisableAccount>
				<DisableButton upperCase onClick={toggleModal}>
					Desativar Minha Conta
				</DisableButton>
			</DisableAccount>
		</>
	)
}

export default ProfileManageArea