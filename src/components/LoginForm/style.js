import styled from "styled-components";
import { Card } from "@material-ui/core";
import TextField from '@mui/material/TextField';

export const CardWrapper = styled.div`
	line-height: 25px;
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	flex-flow: column nowrap;
	@media screen and (max-width: 950px) {
		text-align: center;
	}
	.form-header {
		.login-logo {
			margin-bottom: 3vh;
			max-width: 190px;
			min-width: 100px;
			@media screen and (max-width: 950px) {
				margin: 3vh auto;
				display: flex;
			}
			@media screen and (max-width: 768px) {
				max-width: 120px;
			}
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
			max-width: 100%;
			@media screen and (max-width: 768px) {
				width: 80%;
			}
		}
		span {
			font-weight: 400;
			font-size: 16px;
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
		@media screen and (max-width: 768px) {
			align-items: center;
		}
	.title {
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 25px;
	}

	.policies {
		margin-top: 10px;
		display: block;
	}

	.login-buttons {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		button {
			margin-top: 20px;
		}
		@media screen and (max-width: 950px) {
			min-height: 100px;
		}
		@media screen and (max-width: 768px) {
			min-height: auto;
		}
	}
}
	.support {
		text-align: center;
		margin-top: 5vh;
		font-weight: 500;
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`

export const StyledCard = styled(Card)`
	padding: 30px;
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	@media screen and (max-width: 950px) {
		flex-flow: column;
		padding: 35px 20px 35px;
	}
`

export const CustomInput = styled(TextField)`
width: 100%;
`