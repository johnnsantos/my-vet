import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom"

export const theme = {
	header: '#613CB0',
	backgroundDefault: '#F5F8FD',
	backgroundPaper: '#FFFFFF',
	buttonRadius: '20px',
	buttonPadding: '8px 20px',
	primaryButton: '#6B48FF',
	secondaryButton: '#FFFFFF',
	linkColor: '#007DFF',
	warningColor: '#FF505F',
	successColor: '#4CAF50',
	fontColorDark: '#000000',
	fontColorLight: '#FFFFFF',
}

export default theme

export const PrimaryButton = styled(Button)`
background-color: ${theme.primaryButton} !important;
color: ${theme.fontColorLight} !important;
border-radius: ${theme.buttonRadius} !important;
padding: ${theme.buttonPadding} !important;
width: ${props => props.isHome ? '100%' : props.width};
`

export const SecondaryButton = styled(PrimaryButton)`
background-color: ${theme.secondaryButton} !important;
color: ${theme.primaryButton} !important;
border: 1px solid ${theme.primaryButton} !important;
`

export const CustomLink = styled.a`
text-decoration: none;
color: ${props => props.primary ? theme.primaryButton : theme.linkColor};
`

export const RouterLink = styled(Link)`
text-decoration: none;
color: rgba(0, 0, 0, 0.87);

&:hover {
	color: rgba(0, 0, 0, 1);
}
`