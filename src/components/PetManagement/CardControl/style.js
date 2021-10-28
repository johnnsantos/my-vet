import styled from 'styled-components'

export const ContentCard = styled.div`
	cursor: pointer;
	padding: 30px 50px;
	background-color: ${props => props.highlight ? 'rgba(236, 244, 251, 1)' : 'transparent'};
	box-shadow: ${props => props.highlight ? '1px 1px 8px rgba(74, 80, 86, 0.4)' : 'transparent'};
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;

@media screen and (max-width: 736px) {
	flex-flow: row wrap;
	padding: 30px 40px;

	svg {
		margin-left: 15px;
		margin-top: 15px;
	}
}

.title {
	color: rgba(74, 80, 86, 1);
	font-size: 20px;
	font-weight: 400;
	margin-bottom: 8px;
}

.last-dose {
	color:rgba(126, 129, 146, 1);
	font-size: 16px;
	.emphasis {
		font-weight: 500;
	}
}

.column {
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	width: 60%;

	@media screen and (max-width: 736px) {
		width: 100%;
	}
}

.details {
	width: 40%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-end;
	color: ${props => {
		switch (props.severity) {
			case 'regular':
				return '#3B87D3';

			case 'warning':
				return '#FFB400';

			case 'critical':
				return '#E36360';

			case 'success':
				return '#25BB2B';

			default:
				break;
		}
	}
	};
	.time {
		margin: 0 15px 0;
	}
	@media screen and (max-width: 736px) {
		&-btn {
			display: none;
		}
		width: 100%;
		margin-top: 15px;
	}
}
`

export const ProgressLine = styled.div`
width: 150px;
height: 8px;
background-color: #C6CDD3;
border-radius: 10px;
`

export const Status = styled.div`
width: ${props => `${props.progress}%`};
height: 8px;
border-radius: 10px;
background-color: ${props => {
		switch (props.severity) {
			case 'regular':
				return '#3B87D3';

			case 'warning':
				return '#FFB400';

			case 'critical':
				return '#E36360';

			case 'success':
				return '#25BB2B';

			default:
				break;
		}
	}
	};
`