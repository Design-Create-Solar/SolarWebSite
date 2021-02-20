import React, { useContext } from 'react';
import LogoHolder from './LogoHolder';
import { styled } from '@material-ui/styles';
import * as constants from '../MultiplePages/constants';
import '../../../../node_modules/video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import { Default, Mobile, Desktop } from '../MultiplePages/constants';
import { BlocksContext } from "../../../context/BlocksContext"

function LandingPage() {
	const { blocks } = useContext(BlocksContext)
	const homepageBlocks = blocks.filter((block) => block.page === "HOME")
	const headerName = homepageBlocks[0]?.header
	const textStuff = homepageBlocks[0]?.text
	return (
		<Container>
			<LogoHolder />
			<Desktop>
				<Info>
					<InfoHeader>{headerName}</InfoHeader>
					<ActualText>{textStuff}</ActualText>
					<Player
						playsInline
						autoplay={false}
						src='https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/site-content/club-vid.mp4'
					/>
				</Info>
			</Desktop>
			<Default>
				<Info>
					<InfoHeader>{headerName}</InfoHeader>
					<ActualText>{textStuff}</ActualText>
					<Player
						playsInline
						autoplay={false}
						src='https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/site-content/club-vid.mp4'
					/>
				</Info>
			</Default>
			<Mobile>
				<InfoMobile>
					<InfoHeader>{headerName}</InfoHeader>
					<ActualText mobile>{textStuff}</ActualText>
					<Player
						playsInline
						autoplay={false}
						src='https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/site-content/club-vid.mp4'
					/>
				</InfoMobile>
			</Mobile>
		</Container>
	);
}

const InfoMobile = styled('div')({
	textAlign: 'center',
	fontFamily: 'Futura',
	fontSize: '2em',
	backgroundColor: constants.HOME_PAGE_LIGHT_COLOR
});

const Info = styled('div')({
	padding: '4em 5em',
	// margin: "0 5em",
	textAlign: 'center',
	fontFamily: 'Futura',
	fontSize: '2em',
	backgroundColor: constants.HOME_PAGE_LIGHT_COLOR,
	display: "flex",
	flexDirection: "column"
});

const Container = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	overflow: 'none'
});

const InfoHeader = styled('h4')({
	fontWeight: 500,
	fontSize: '1.5em',
	textTransform: 'uppercase',
	fontFamily: 'Futura',
	color: constants.HOME_PAGE_DARK_COLOR
});

const ActualText = styled('div')({
	color: constants.HOME_PAGE_DARK_TEXT_COLOR,
	paddingBottom: "1.5rem"
});

export default LandingPage