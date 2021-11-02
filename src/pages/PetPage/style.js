import styled from 'styled-components'

export const PetsWrapper = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;

@media screen and (max-width: 736px) {
.MuiGrid-spacing-xs-6 {
width: 100%;
margin: 0 auto;
}
}
`

export const RefreshArea = styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-end;
min-height: 70px;
`