import styled from "styled-components";
import theme from "../../../utils/theme";

export const Header = styled.div`
	background-color: ${theme.header};
	min-height: 65px;
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;

	.container {
		.user-profile {
			cursor: pointer;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;

			.username {
				margin-left: 10px;
				font-weight: 500;
				color: ${theme.fontColorLight}
			}
		}
	}

	.logo-mobile {
		display: none;
	}

	@media screen and (max-width: 739px) {
		margin-bottom: 50px;

		.logo-desktop {
			display: none;
		}

		.logo-mobile {
			display: block;
			/* margin-left: 45px; */
		}
	}
`

export const MobileMenu = styled.div`
	color: ${theme.fontColorLight};
	display: none;
	@media screen and (max-width: 736px) {
		display: inline-flex;
		position: absolute;
		height: 65px;
	}
`

export const DrawerHeader = styled.div`
	display: flex;
	align-items: center;
	padding: 5px;
	justify-content: flex-end;
`