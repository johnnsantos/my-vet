import logoFull from '../../assets/images/logoFull.svg'
import loginImg from '../../assets/images/login-img.svg'
import { CardWrapper, StyledCard, CustomInput } from './style'
import { PrimaryButton, SecondaryButton, CustomLink } from '../../utils/theme'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { requestTokenByEmail } from '../../services/api'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'
import { handleUserThunk } from '../../redux/modules/user/thunks'
import { Grid } from '@material-ui/core'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginForm = () => {
	const [authenticated, setAuthenticated] = useState(false)
	const [formValues, setFormValues] = useState({
		formState: {
			email: ''
		},
		isSubmitting: false,
		success: false,
		hasError: false,
		errorMessage: '',
		successMessage: ''
	})

	const dispatch = useDispatch()

	const { isSubmitting, success, hasError, errorMessage, successMessage } =
		formValues

	const successHandler = () => {
		setFormValues({
			formState: formValues.formState,
			isSubmitting: false,
			success: true,
			hasError: false,
			isAuthenticated: true,
			successMessage:
				'Usuário logado com sucesso!'
		})
	}

	const errorHandler = error => {
		setFormValues({
			...formValues,
			isSubmitting: false,
			success: false,
			hasError: true,
			errorMessage: 'Houve um erro com o login'
		})
		setTimeout(() => {
			setFormValues({
				formState: {
					email: formValues.formState.email || '',
				},
				isSubmitting: false,
				success: false,
				hasError: false,
				errorMessage: '',
				successMessage: ''
			})
		}, 5000)
	}

	const submitForm = formData => {

		const newState = formValues
		newState.formState = formData

		setFormValues({ ...newState, isSubmitting: true })

		requestTokenByEmail({ email: formData.email })
			.then((res) => {
				successHandler()
				dispatch(handleUserThunk(res.data))
			})
			.catch((err) => {
				errorHandler(err)
			})
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
				<form onSubmit={handleSubmit} noValidate>
					<h3 className='title'>
						Acesse o perfil de saúde do seu pet
					</h3>
					<CustomInput
						sx={{ '& .MuiFormHelperText-root': { marginLeft: 0 } }}
						error={errors.email}
						onBlur={handleBlur}
						touched={touched.email}
						value={values.email}
						onChange={handleChange}
						id='email'
						name='email'
						placeholder="Email"
						helperText={errors.email ? errors.email : ''}
					/>
					<span className='policies'>
						Ao cadastrar-se você concorda com nossa <CustomLink href='#' target='_blank'>política de privacidade</CustomLink> e <CustomLink href='#' target='_blank'>termos de serviço</CustomLink>
					</span>
					<div className="login-buttons">
						{isSubmitting ? (
							<CircularProgress />
						) : (
							<PrimaryButton uppercase type='submit' isHome variant="contained">
								Receber link de acesso
							</PrimaryButton>
						)}
						{/* <SecondaryButton uppercase isHome>
							Criar o perfil do meu pet
						</SecondaryButton> */}
					</div>
				</form>
			</>
		)
	}

	return (
		<>
			{success && !hasError ? (
				<Redirect to='/dashboard' />
			) : (
				<CardWrapper>
					<div className='form-header'>
						<img alt='Guia Vet' className='login-logo' src={logoFull} />
					</div>
					<StyledCard>
						<Grid container spacing={3}>
							<Grid item lg="6" xs="12">
								<div className="promo">
									<img alt='Saúde do Pet' className='dog-image' src={loginImg} />
									<span>
										Nunca mais se esqueça das datas mais importantes
										para a saúde do seu pet!
									</span>
								</div>
							</Grid>
							<Grid item lg="6" xs="12">
								<div className="form-login">
									<Formik
										initialValues={formValues.formState}
										// enableReinitialize
										onSubmit={submitForm}
										render={renderForm}
										validationSchema={Yup.object().shape({
											email: Yup.string()
												.email('Por favor, insira um e-mail válido')
												.required('Por favor, insira um e-mail')
										})}
									/>
								</div>
							</Grid>
						</Grid>
					</StyledCard>
					<span className="support">
						Precisa de ajuda? Entre em contato: <CustomLink primary href='#' target='_blank'>suporte@guia.vet</CustomLink> | <CustomLink primary href='#' target='_blank'>31 0000000</CustomLink>
					</span>
				</CardWrapper>
			)}
		</>
	)
}

export default LoginForm