import styled from 'styled-components'
import { theme } from '../../../utils/theme'
import { Button } from '@mui/material'

export const ProfileManageContent = styled.div`
padding: 2% 8%;

.title {
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 50px;
	display: block;
}

.row {
	margin-top: 20px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	column-gap: 40px;
}

.row-submit {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-end;
	min-height: 70px;
}
`

export const SaveButton = styled(Button)`
background-color: ${theme.primaryButton} !important;
color: ${theme.fontColorLight} !important;
border-radius: ${theme.buttonRadius} !important;
padding: 5px 40px !important;
`

export const DisableAccount = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-end;
	min-height: 70px;
	width: 100%;
	margin-top: 20px;
`

export const DisableButton = styled(Button)`
border-radius: ${theme.buttonRadius} !important;
color: ${theme.warningColor} !important;
background-color: transparent !important;
border: 1px solid ${theme.warningColor} !important;
padding: 5px 40px !important;
`