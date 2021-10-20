import styled from "styled-components";
import { Card, OutlinedInput } from "@material-ui/core";

export const CardWrapper = styled.div`
line-height: 25px;
max-width: 1100px;
margin: 0 auto;
display: flex;
flex-flow: column nowrap;

.form-header {
	.login-logo {
	margin-bottom: 3vh;
	max-width: 190px;
	min-width: 100px;
}
}

.promo {
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
margin-right: 15px;

 .dog-image {
	 margin-bottom: 15px;
	 width: 100%;
 }

 span {
	 font-weight: 400;
	 font-size: 16px;
	 padding: 0 50px 0;
	@media screen and (max-width: 950px) {
	padding: 0;
	margin: 0 0 15px;
}
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
	margin-bottom: 25px;
}

.policies {
	margin-top: 10px;
}

.login-buttons {
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-between;
width: 100%;
height: 11vh;
margin-top: 5vh;
@media screen and (max-width: 950px) {
	min-height: 100px;
}
}
}

.support {
/* display: flex; */
align-self: center;
margin-top: 5vh;
font-weight: 500;
}
`

export const StyledCard = styled(Card)`
padding: 50px 55px 50px;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
@media screen and (max-width: 950px) {
	flex-flow: column;
}
`

export const CustomInput = styled(OutlinedInput)`
width: 100%;
`