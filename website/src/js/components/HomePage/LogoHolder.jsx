import { styled, makeStyles } from "@material-ui/styles";
import React from "react";
import * as constants from "../../constants";
import Typing from "react-typing-animation";
import Box from "@material-ui/core/Box"
import { Default, Mobile, Desktop } from '../../constants';

const Logo = require("../../../images/Logo.png");
const texts = ["CREATORS", "DESIGNERS", "SOLAR"];

const base = "WE ARE  ";

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: "Monospace",
		fontSize: 10000, //TODO: Doesnt seem to be working also better loop over texts
		fontStyle: "oblique"
	}
}));

const LogoHolder = () => {
	const classes = useStyles();
	return (
			<Container>
				<img src={Logo} style={{height: "35em", paddingBottom: "2em"}}/>
				<Box 
					style={{
						minHeight: "4em"
					}}
				>
					<Typing loop={true} hideCursor={true}>
						<Text>{base}</Text>
						<SpecialText>{texts[0]}</SpecialText>
						<Typing.Backspace count={texts[0].length + 1} delay={500} />
						<SpecialText>{texts[1]}</SpecialText>
						<Typing.Backspace count={texts[1].length + 1} delay={500} />
						<SpecialText>{texts[2]}</SpecialText>
						<Typing.Backspace count={texts[2].length + base.length + 3} delay={500} />
					</Typing>
				</Box>
			</Container>
	);
};

export default LogoHolder;

const Container = styled("div")({
	backgroundColor: constants.HOME_PAGE_DARK_COLOR,
	color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
	width: "100%",
	height: "100",
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	boxShadow: "10px 10px 5px gray",
});

const Text = styled("span")({
	fontFamily: "Avenir",
	fontSize: "2.5em",
	fontWeight: "800",
	color: constants.HOME_PAGE_LIGHT_TEXT_COLOR
});

const SpecialText = styled("span")({
	fontFamily: "Futura",
	fontSize: "2.5em",
	fontWeight: "800",
	color: constants.HOME_PAGE_TYPING_TEXT_COLOR,
});