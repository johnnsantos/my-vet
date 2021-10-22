import styled from 'styled-components'
import { Grid } from "@mui/material"

export const PetControl = styled.div`
margin-bottom: 45px;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;

@media screen and (max-width: 736px) {
	justify-content: center;
}
`

export const StyledGrid = styled(Grid)`
max-width: 1300px;
margin: 0 auto;

@media screen and (max-width: 736px) {
max-width: fit-content;
margin: auto;
}
`
