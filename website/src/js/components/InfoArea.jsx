import React from "react";
import { styled } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import * as constants from "../constants";
import "../../infoArea.css"
import Slideshow from './Slideshow';
import {Desktop, Mobile, Tablet, Default} from '../constants';



var color;
const InfoArea = (props) => {
	console.log(props)
	if (props.color === constants.HOME_PAGE_DARK_COLOR)
		return (
			<Desktop>
				<ContainerDark flexDirection={props.align === "left" ? "row" : "row-reverse"} backgroundColor="red">
					<TextArea>
						<h4 className="info-header">{props.header}</h4>
						<ActualText>{props.text}</ActualText>
					</TextArea>
					{props.images &&<Slideshow images={props.images}/>}
				</ContainerDark>
			</Desktop>
		);
	if (props.color === constants.HOME_PAGE_LIGHT_COLOR)
		return (
			<Desktop>
				<ContainerLight flexDirection={props.align === "left" ? "row" : "row-reverse"} backgroundColor="red">
					<TextArea>
						<h4 className="info-header">{props.header}</h4>
						<ActualText>{props.text}</ActualText>
					</TextArea>
					{props.images && <Slideshow images={props.images}/>}			
				</ContainerLight>
			</Desktop>
		);
};


const ContainerDark = styled(Box)({
	display: "flex",
	alignItems: "center",
	backgroundColor: constants.HOME_PAGE_DARK_COLOR,
	color: constants.HOME_PAGE_LIGHT_TEXT_COLOR
});

const ContainerLight = styled(Box)({
	display: "flex",
	alignItems: "center",
	backgroundColor: constants.HOME_PAGE_LIGHT_COLOR,
	color: constants.HOME_PAGE_DARK_TEXT_COLOR
});

const TextArea = styled(Box)({
	order: 0,
	display: "flex",
	flexDirection: "column",
	width: "50%",
	paddingTop: "5%",
	paddingBottom: "5%",
	paddingRight: "3%",
	paddingLeft: "3%",
});

const ActualText = styled('p') ({
	fontFamily: "Futura", 
	fontSize: "25px"
});

{/* <Responsive displayIn={["Laptop"]}>
<ContainerDark flexDirection={props.align === "left" ? "row" : "row-reverse"} backgroundColor="red">
	<TextArea>
		<h4 className="info-header">{props.header}</h4>
		<Typography variant="body1">{props.text}</Typography>
	</TextArea>
	{props.images &&<Slideshow images={props.images}/>}
</ContainerDark>
</Responsive> */}

export default InfoArea;
