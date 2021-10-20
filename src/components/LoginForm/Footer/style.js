import styled from "styled-components";

export const FooterContainer = styled.div`
width: 100%;
height: 60px;
font-weight: 500;
text-align: center;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;

img {
	width: 110px;
	margin-right: 20px;
	@media screen and (max-width: 950px) {
	margin: 2vh 0;
}
}

@media screen and (max-width: 950px) {
	flex-flow: column;
	padding: 3vh 0 5vh;
}
`