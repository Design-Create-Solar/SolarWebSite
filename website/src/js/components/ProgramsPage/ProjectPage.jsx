import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import * as constants from '../MultiplePages/constants';
import InfoArea from '../MultiplePages/InfoArea';
import TopBar from '../MultiplePages/TopBar';

const infoArray = [
	{
		header: 'Impact',
		color: constants.HOME_PAGE_LIGHT_COLOR,
		text:
			'This program aims at developing an end product and/or service that addresses energy needs of deprived communities around the world.We will be partnering with Arab Towers Contracting Company (ATCCO) in Jordan to replace a zinc sheet metal roof with a Solar Roof for a selected home in the Jerash Refugee Camp. The main features of this solar roof will include thermal insulation, sound proofing, and an on-grid solar generating system that will completely eliminate the inhabitants’ electricity costs. Additionally, the new roofing structure will eliminate the current openings in the roof and fully enclose the home to prevent any environmental contaminants from intruding the home. The goal this year is to install the first prototype of a solar roof and prove that it is effective so that in the following years we can obtain more funding and sponsorships to upscale and replace roofs for more homes throughout the camp',
		align: 'right',
		images: [
			require('../../../images/ImpactPics/impact1.png'),
			require('../../../images/ImpactPics/impact2.png'),
			require('../../../images/ImpactPics/impact3.png'),
			require('../../../images/ImpactPics/i.png'),
			require('../../../images/ImpactPics/impact5.png')
		]
	},
	{
		header: '@ UCLA',
		color: constants.HOME_PAGE_DARK_COLOR,
		text:
			'This program aims at developing an end product and/or service that can enhance usage of renewable energy sources at UCLA.We will build the first prototype of a solar generator that autonomously orients itself to optimally align with the sun. This system must be able to charge multiple devices at the same time and it should be able to do so reliably and continuously throughout the year. In subsequent years we will test the prototype and make changes to optimize the designs. Ultimately, we want our smart solar generator to compete with commercial solar chargers used at UCLA and around the world.',
		align: 'left',
		images: [
			require('../../../images/@uclaPics/@ucla1.png'),
			require('../../../images/@uclaPics/@ucla2.jpg'),
			require('../../../images/@uclaPics/@ucla3.JPG'),
			require('../../../images/@uclaPics/@ucla4.png'),
			require('../../../images/@uclaPics/@ucla5.png'),
			require('../../../images/@uclaPics/@ucla6.png')
		]
	},
	{
		header: 'Collaborate',
		color: constants.HOME_PAGE_LIGHT_COLOR,
		text:
			'This program aims at working with other clubs at UCLA to develop an end-product that relies on solar energy to function as desired.',
		align: 'right',
		images: [
			require('../../../images/Collab Pics/collab1.JPG'),
			require('../../../images/Collab Pics/collab2.jpg'),
			require('../../../images/Collab Pics/collab3.JPG'),
			require('../../../images/Collab Pics/collab4.png'),
			require('../../../images/Collab Pics/collab5.png'),
			require('../../../images/Collab Pics/collab6.png'),
			require('../../../images/Collab Pics/collab7.png')
		]
	}
];

export default class ProjectPage extends Component {
	render(props) {
		console.log(props);
		return (
			<Container>
				<TopBar history={this.props.history} />
				<InfoContainer order={2}>
					{infoArray.map(info => {
						console.log(info);
						return (
							<InfoArea
								header={info.header}
								color={info.color}
								text={info.text}
								align={info.align}
								images={info.images}
							/>
						);
					})}
				</InfoContainer>
			</Container>
		);
	}
}

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
