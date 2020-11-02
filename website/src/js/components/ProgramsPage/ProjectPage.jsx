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
			require('../../../images/ImpactPics/impact3.png'),
			require('../../../images/ImpactPics/modulz-03.png'),
			require('../../../images/ImpactPics/modulz-04.png'),
			require('../../../images/ImpactPics/modulz-05.png'),
			require('../../../images/ImpactPics/modulz-06.png')
		]
	},
	{
		header: '@UCLA | Smart Solar Generator',
		color: constants.HOME_PAGE_DARK_COLOR,
		text:
			'This program aims at developing an end product and/or service that can enhance usage of renewable energy sources at UCLA.We will build the first prototype of a solar generator that autonomously orients itself to optimally align with the sun. This system must be able to charge multiple devices at the same time and it should be able to do so reliably and continuously throughout the year. In subsequent years we will test the prototype and make changes to optimize the designs. Ultimately, we want our smart solar generator to compete with commercial solar chargers used at UCLA and around the world.',
		align: 'left',
		images: [
			require('../../../images/@uclaPics/@ucla2.jpg'),
			require('../../../images/@uclaPics/@ucla3.JPG'),
			require("../../../images/@uclaPics/modulz-01.png"),
			require("../../../images/@uclaPics/modulz-02.png")
		]
	},
	{
		header: 'Collaborate',
		color: constants.HOME_PAGE_LIGHT_COLOR,
		text: "This program aims at working with other clubs at UCLA to develop an end-product that relies on solar energy to function as desired. in 2019 we collaborated with Bruin Racing to develop a solar powered electric vehicle. This year (2020) we are working with Bruin Home Solutions to build a solar powered hydroponic garden. These projects aim to create solar solutions as well as strengthen the sustainability community at UCLA!",
		align: 'right',
		images: [
			require('../../../images/Collab Pics/collab1.JPG'),
			require('../../../images/Collab Pics/collab2.jpg'),
			require('../../../images/Collab Pics/collab3.JPG'),
			require('../../../images/Collab Pics/hydroponics.png'),
		]
	}, {
		header: "Collaborate | Solar Powered Hydroponic Garden",
		color: constants.HOME_PAGE_DARK_COLOR,
		text: "In Spring 2020 Design Create Solar (SOLAR) and Bruin Home Solutions (BHS) agreed to collaborate on a project that would hopefully provide fresh and sustainable food to UCLA students and LA communities in need. The teams decided to start research and development on a mobile solar powered hydroponics system. The goal of this project is to build a garden that relies on the sun to power all of its electrical components and utilizes hydroponic technology to optimize plant yield. We aim to test this project on UCLA’s campus by spring 2021 and to implement this around Los Angeles thereafter.",
		align: "left",
		images: [
			require('../../../images/Collab Pics/hydroponics.png')
		]
	}, {
		header: "@UCLA | Solar Scooter",
		color: constants.HOME_PAGE_LIGHT_COLOR,
		text: "The Solar Scooter program was developed over summer of 2020 and is Design Create Solar’s second @UCLA project. The aim of this program is to create sustainable and free transportation that is powered by the sun. We are retrofitting preexisting electric scooters with durable solar charging systems and hoping to start testing of our first model by spring 2021. We are developing an app to track and regulate the use of these scooters, and hope to implement this transportation alternative to UCLA’s campus by spring 2021.",
		align: "right",
		images: [
			require("../../../images/@uclaPics/scooter.png")
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
