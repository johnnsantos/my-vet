import logoFull from '../../assets/images/logoFull.svg'
import dog from '../../assets/images/LoginForm/dog.png'
import { CardWrapper, StyledCard, CustomInput } from './style'
import { PrimaryButton, SecondaryButton, CustomLink } from '../../utils/theme'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schemaLogin } from '../../utils/schemas'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { requestTokenByEmail } from '../../services/api'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'
import { handleUserThunk } from '../../redux/modules/user/thunks'
import { Grid } from '@material-ui/core'

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [authenticated, setAuthenticated] = useState(false)

	const dispatch = useDispatch()

	const { register, unregister, handleSubmit, setValue, errors } = useForm({
		resolver: yupResolver(schemaLogin),
		mode: 'onSubmit'
	})

	useEffect(() => {
		register("email", { required: "Campo obrigatório" })
		return () => {
			unregister("email")
		}
	}, [register, unregister])

	const handleForm = async (email) => {
		setIsLoading(true)
		requestTokenByEmail(email).then((res) => {
			console.log(res)
			setIsLoading(false)
			const userInfo = res.data
			dispatch(handleUserThunk(userInfo))
			setAuthenticated(true)
		}).catch((err) => {
			console.log(err)
		})
	}

	const handleChangeEmail = (e) => {
		e.preventDefault()
		setValue("email", e.target.value)
	}

	return (
		<>
			{authenticated ? (
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
									<img alt='Saúde do Pet' className='dog-image' src={dog} />
									<span>
										Nunca mais se esqueça das datas mais importantes
										para a saúde do seu pet!
									</span>
								</div>
							</Grid>
							<Grid item lg="6">
								<div className="form-login">
									<form onSubmit={handleSubmit(handleForm)} noValidate>
										<h3 className='title'>
											Acesse o perfil de saúde do seu pet
										</h3>
										<CustomInput
											id='email'
											name='email'
											placeholder="Email"
											onChange={handleChangeEmail}
											{...register('email', { required: true })}
										/>
										{errors && (
											<span>
												{errors.email.message}
											</span>
										)}
										<span className='policies'>
											Ao cadastrar-se você concorda com nossa <CustomLink href='#' target='_blank'>política de privacidade</CustomLink> e <CustomLink href='#' target='_blank'>termos de serviço</CustomLink>
										</span>
										<div className="login-buttons">
											{isLoading ? (
												<CircularProgress />
											) : (
												<PrimaryButton uppercase type='submit' isHome variant="contained">
													Receber link de acesso
												</PrimaryButton>
											)}

											<SecondaryButton uppercase isHome>
												Criar o perfil do meu pet
											</SecondaryButton>
										</div>
									</form>
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