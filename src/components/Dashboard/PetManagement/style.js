import styled from 'styled-components'
import { Grid } from "@mui/material"

export const PetControl = styled.div`
margin: 20px 0;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;

@media screen and (max-width: 736px) {
	justify-content: flex-end;
	margin-top: -8px;
}
`

export const StyledGrid = styled(Grid)`
	margin: 0 auto;
	@media screen and (max-width: 736px) {
	max-width: fit-content;
	margin: auto;
}
`
