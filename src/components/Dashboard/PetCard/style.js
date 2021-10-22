import styled from 'styled-components'
import { theme } from '../../../utils/theme'

export const EditArea = styled.div`
float: right;
padding: 10px;
`

export const StyledChip = styled.div`
padding: 4px 10px;
color: ${theme.fontColorLight};
background-color: ${props => props.healthy ? theme.successColor : theme.warningColor};
border-radius: 64px;
font-size: 12px;
margin-bottom: 20px;
`