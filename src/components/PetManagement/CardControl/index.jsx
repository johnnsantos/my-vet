import { Divider } from "@material-ui/core"
import { ChevronRight } from "@mui/icons-material"
import { SecondaryButton } from "../../../utils/theme"
import { ContentCard, ProgressLine, Status } from './style'
import { useState } from 'react'

const CardControl = (props) => {
	const [highlight, setHighlight] = useState(false)

	return (
		<>
			<ContentCard
				onClick={() => {
					window.Intercom(props.tagIntercom)
					//Intercom('showNewMessage');
				}}
				onMouseOver={(e) => {
					e.preventDefault()
					setHighlight(!highlight)
				}} onMouseOut={(e) => {
					e.preventDefault()
					setHighlight(!highlight)
				}} highlight={highlight} severity={props.severity}>
				<div className="column">
					<span className="title">
						{props.name}
					</span>
					{props.lastDose ? (
						<span className="last-dose">
							Última dose: <span className='emphasis'>{props.lastDose}</span>
						</span>
					) : (
						<span className="last-dose">
							Ainda não foi cadastrada
						</span>
					)}
				</div>
				{props.hasStartedProtocol ? (

					<>
						{props.regularity != 'once' && (
							<>
								<div className="details">
									<ProgressLine >
										<Status progress={props.progress} severity={props.severity} />
									</ProgressLine>
									<span className="time">
										{props.time}
									</span>
									<span className="format">
										dia(s)
									</span>
								</div>
							</>
						)}
						<div className="details-btn">
							<ChevronRight sx={{ color: '#C6CDD3' }} />
						</div>
					</>

				) : (
					<div className="details">
						<SecondaryButton>
							Iniciar protocolo
						</SecondaryButton>
					</div>
				)}
			</ContentCard>
			<Divider variant="middle" />
		</>
	)
}

export default CardControl