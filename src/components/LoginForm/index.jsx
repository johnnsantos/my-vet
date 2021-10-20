import logoFull from '../../assets/images/logoFull.svg'
import dog from '../../assets/images/LoginForm/dog.png'
import { CardWrapper, StyledCard, PrimaryButton, SecondaryButton, CustomInput } from './style'

const LoginForm = () => {
	return (
		<CardWrapper>
			<div className='form-header'>
				<img className='login-logo' src={logoFull} />
			</div>
			<StyledCard>
				<div className="promo">
					<img className='dog-image' src={dog} />
					<span>
						Nunca mais se esqueça das datas mais importantes
						para a saúde do seu pet!
					</span>
				</div>
				<div className="form-login">
					<span className='title'>
						Acesse o perfil de saúde do seu pet
					</span>
					<CustomInput
						placeholder="Email"
					/>
					<span className='policies'>
						Ao cadastrar-se você concordo com nossa <a href='#'>política de privacidade</a> e <a href='#'>termos de serviço</a>
					</span>
					<div className="login-buttons">
						<PrimaryButton variant="contained">
							RECEBER LINK DE ACESSO
						</PrimaryButton>
						<SecondaryButton>
							CRIAR O PERFIL DO MEU PET
						</SecondaryButton>
					</div>
				</div>
			</StyledCard>
		</CardWrapper>
	)
}

export default LoginForm