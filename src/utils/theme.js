import styled from "styled-components";
import { Button } from "@material-ui/core";

export const theme = {
	header: '#613CB0',
	backgroundDefault: '#F5F8FD',
	backgroundPaper: '#FFFFFF',
	buttonRadius: '20px',
	buttonPadding: '8px',
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
width: 100%;
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