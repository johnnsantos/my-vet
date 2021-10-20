import styled from 'styled-components'
import { Paper } from '@mui/material'

export const StyledPaper = styled(Paper)`
min-height: 60px;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: start;
.wrapper{
font-size: 16px;
max-width: 1200px;
width: 100%;
margin: 0 auto;
}
`