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
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: row nowrap;

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
`