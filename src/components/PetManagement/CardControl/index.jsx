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
				onClick={() => console.log(props.id)}
				onMouseOver={(e) => {
					e.preventDefault()
					setHighlight(!highlight)
				}} onMouseOut={(e) => {
					e.preventDefault()
					setHighlight(!highlight)
				}} highlight={highlight} regularity={props.regularity}>
				<div className="column">
					<span className="title">
						{props.name}
					</span>
					<span className="last-dose">
						Última dose: <span className='emphasis'>{props.lastDose}</span>
					</span>
				</div>
				{props.hasStartedProtocol ? (
					<>
						<div className="details">
							<ProgressLine >
								<Status progress={props.progress} regularity={props.regularity} />
							</ProgressLine>
							<span className="time">
								{props.time}
							</span>
							<span className="format">
								dia(s)
							</span>
						</div>
						<ChevronRight sx={{ color: '#C6CDD3' }} />
					</>
				) : (
					<div className="details">
						<SecondaryButton>
							INICIAR PROTOCOLO
						</SecondaryButton>
					</div>
				)}
			</ContentCard>
			{!props.highlight && !props.isLastCard && (<Divider variant="middle" />)}
		</>
	)
}

export default CardControl