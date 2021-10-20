import styled from "styled-components";
import { Card, Button, OutlinedInput } from "@material-ui/core";
import colors from "../../utils/colors";

export const CardWrapper = styled.div`
font-family: 'Roboto';
max-width: 1200px;
margin: 0 auto;

.form-header {
	.login-logo {
	min-width: 200px;
	max-width: 10vw;
	margin-bottom: 3vh;
}
}

.promo {
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
margin-right: 25px;

 .dog-image {
	 min-width: 35%;
	 margin-bottom: 15px;
 }
}

.form-login {
display: flex;
flex-flow: column nowrap;
align-items: flex-start;
justify-content: center;

.title {
	font-size: 20px;
	font-weight: 500;
	line-height: 32px;
	margin-bottom: 15px;
}

.policies {
	margin-top: 10px;
	a {
		text-decoration: none;
	}
}

.login-buttons {
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-between;
width: 100%;
height: 11vh;
margin-top: 3vh;
}
}
`

export const StyledCard = styled(Card)`
padding: 30px 55px 30px;
display: flex;
flex-flow: row nowrap;
`

export const PrimaryButton = styled(Button)`
background-color: ${colors.primaryButton} !important;
color: ${colors.fontColorLight} !important;
border-radius: 20px !important;
width: 100%;
`
export const SecondaryButton = styled(PrimaryButton)`
background-color: ${colors.secondaryButton} !important;
color: ${colors.primaryButton} !important;
border: 1px solid ${colors.primaryButton} !important;
`

export const CustomInput = styled(OutlinedInput)`
width: 100%;
`