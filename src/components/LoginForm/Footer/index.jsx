import { CustomLink } from "../../../utils/theme"
import { FooterContainer } from "./style"
import logoFull from '../../../assets/images/logoFull.svg'

const Footer = () => {
	return (
		<FooterContainer>
			<img alt='Guia Vet' src={logoFull} />
			<span>Acesse nosso <CustomLink primary href='#'>blog</CustomLink> e se informe mais sobre seu pet.</span>
		</FooterContainer>
	)
}

export default Footer