import React from "react";
import { styled, StylesProvider } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import * as constants from "../constants";
var color;
const InfoArea = (props) => {
	if (props.color === constants.HOME_PAGE_DARK_COLOR)
		return (
			<ContainerDark flexDirection={props.align === "left" ? "row" : "row-reverse"} backgroundColor="red">
				<TextArea>
					<Typography variant="h5">{props.header}</Typography>
					<Typography variant="body1">{props.text}</Typography>
				</TextArea>
			</ContainerDark>
		);
	if (props.color === constants.HOME_PAGE_LIGHT_COLOR)
		return (
			<ContainerLight flexDirection={props.align === "left" ? "row" : "row-reverse"} backgroundColor="red">
				<TextArea>
					<Typography variant="h5">{props.header}</Typography>
					<Typography variant="body1">{props.text}</Typography>
				</TextArea>
			</ContainerLight>
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
	paddingTop: "10%",
	paddingBottom: "10%",
	paddingRight: "5%",
	paddingLeft: "5%"
});

export default InfoArea;
