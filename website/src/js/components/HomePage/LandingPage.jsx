import React, { Component } from 'react';
import LogoHolder from './LogoHolder';
import { styled } from '@material-ui/styles';
import * as constants from '../../constants';
import InfoArea from '../InfoArea';
import '../../../../node_modules/video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import TopBar from '../TopBar';
import { Default, Mobile, Desktop } from '../../constants';

const infoArray = [
	{
		header: 'MISSION STATEMENT',
		color: constants.HOME_PAGE_LIGHT_COLOR,
		text:
			'Design Create Solar strives to bring UCLA students from different educational backgrounds together to brainstorm, design and ultimately produce a solar energy solution to energy-related issues within the UCLA community and deprived communities around the world.',
		align: 'right'
	},
	{
		header: 'About the Club',
		color: constants.HOME_PAGE_DARK_COLOR,
		text:
			'Founded in Spring 2019, Design Create Solar is a non-profit technology oriented student organization that strives to bring UCLA students from different educational backgrounds together to brainstorm, design and ultimately produce solar energy solutions to energy-related issues within the UCLA community and underprivileged communities around the world.',
		align: 'left'
	}
];

export default class LandingPage extends Component {
	render() {
		return (
			<Container>
				<TopBar history={this.props.history} />
				<LogoHolder />
				{/* <InfoContainer order={2}>
                {
                    infoArray.map(info=>{return(
                        <InfoArea header={info.header} color={info.color} text={info.text} align={info.align}/>
                    )})
                }
                </InfoContainer> */}
				<Desktop>
					<BetterInfoContainer>
						<InfoHeader>{infoArray[1].header}</InfoHeader>
						<ActualText>{infoArray[1].text}</ActualText>
						{/* <video // src='http://localhost:5000/static/poo.mp4' /> */}
						<Player
							playsInline
							// poster="/assets/poster.png"
							// src='http://localhost:5000/static/poo.mp4'
							src='https://www.youtube.com/watch?v=0o46wh2UCqc'
						/>
					</BetterInfoContainer>
				</Desktop>
				<Default>
					<BetterInfoContainer>
						<InfoHeader>{infoArray[1].header}</InfoHeader>
						<ActualText>{infoArray[1].text}</ActualText>
						<Player
							playsInline
							// poster="/assets/poster.png"
							// src='http://localhost:5000/static/poo.mp4'
							src='https://www.youtube.com/watch?v=0o46wh2UCqc'
						/>
					</BetterInfoContainer>
				</Default>
				<Mobile>
					<BetterInfoContainerMObile>
						<InfoHeader>{infoArray[1].header}</InfoHeader>
						<ActualText mobile>{infoArray[1].text}</ActualText>
						<Player
							playsInline
							// poster="/assets/poster.png"
							// src='http://localhost:5000/static/poo.mp4'
							src='https://www.youtube.com/watch?v=0o46wh2UCqc'
						/>
					</BetterInfoContainerMObile>
				</Mobile>
			</Container>
		);
	}
}

const BetterInfoContainerMObile = styled('div')({
	// padding: '4em 5em',
	// margin: "0 5em",
	textAlign: 'center',
	fontFamily: 'Futura',
	fontSize: '2em',
	backgroundColor: constants.HOME_PAGE_LIGHT_COLOR
	// backgroundImage: "url(https://www.transparenttextures.com/patterns/leather.png)",
});

const BetterInfoContainer = styled('div')({
	padding: '4em 5em',
	// margin: "0 5em",
	textAlign: 'center',
	fontFamily: 'Futura',
	fontSize: '2em',
	backgroundColor: constants.HOME_PAGE_LIGHT_COLOR
	// backgroundImage: "url(https://www.transparenttextures.com/patterns/leather.png)",
});

const Container = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	overflow: 'none'
});

const InfoContainer = styled('div')({
	order: 1,
	flex: 1
});
const InfoHeader = styled('h4')({
	fontWeight: 500,
	fontSize: '1.5em',
	textTransform: 'uppercase',
	fontFamily: 'Futura',
	color: constants.HOME_PAGE_DARK_COLOR
});

const ActualText = styled('div')({
	color: constants.HOME_PAGE_DARK_TEXT_COLOR
});