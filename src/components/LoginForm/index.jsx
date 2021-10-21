import logoFull from '../../assets/images/logoFull.svg'
import dog from '../../assets/images/LoginForm/dog.png'
import { CardWrapper, StyledCard, CustomInput } from './style'
import { PrimaryButton, SecondaryButton, CustomLink } from '../../utils/theme'

const LoginForm = () => {
	return (
		<CardWrapper>
			<div className='form-header'>
				<img alt='Guia Vet' className='login-logo' src={logoFull} />
			</div>
			<StyledCard>
				<div className="promo">
					<img alt='Saúde do Pet' className='dog-image' src={dog} />
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
						Ao cadastrar-se você concorda com nossa <CustomLink href='#' target='_blank'>política de privacidade</CustomLink> e <CustomLink href='#' target='_blank'>termos de serviço</CustomLink>
					</span>
					<div className="login-buttons">
						<PrimaryButton isHome variant="contained">
							RECEBER LINK DE ACESSO
						</PrimaryButton>
						<SecondaryButton isHome>
							CRIAR O PERFIL DO MEU PET
						</SecondaryButton>
					</div>
				</div>
			</StyledCard>
			<span className="support">
				Precisa de ajuda? Entre em contato: <CustomLink primary href='#' target='_blank'>suporte@guia.vet</CustomLink> | <CustomLink primary href='#' target='_blank'>31 0000000</CustomLink>
			</span>
		</CardWrapper>
	)
}

export default LoginForm