import { styled, makeStyles } from "@material-ui/styles";
import React from "react";
import * as constants from "../constants";
import ReactTypingEffect from "react-typing-effect";
import Typing from "react-typing-animation";

const Logo = require("../../images/Logo.png");
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
		<Container /*style={{ background: "linear-gradient(to bottom, #1d2951, white)" }}*/>
			<img src={Logo} />
			{/* {texts.forEach(text=>{
            return(<div>
            <Text>{text}</Text>
            <Typing.Backspace count={text.length}/>
            </div>)
        })} */}
			{/* <ReactTypingEffect staticText="We are" eraseDelay={2000} text= {texts} className={classes.text}/> */}
			<Typing loop={true}>
				<Text>{base}</Text>
				<SpecialText>{texts[0]}</SpecialText>
				<Typing.Backspace count={texts[0].length + 1} delay={500} />
				<SpecialText>{texts[1]}</SpecialText>
				<Typing.Backspace count={texts[1].length + 1} delay={500} />
				<SpecialText>{texts[2]}</SpecialText>
				<Typing.Backspace count={texts[2].length + base.length + 3} delay={500} />
				{/* <SpecialText>{texts[3]}</SpecialText>
				<Typing.Backspace count={texts[3].length + base.length + 3} delay={500} /> */}
			</Typing>
		</Container>
	);
};

export default LogoHolder;

const Container = styled("div")({
	// position:"fixed",
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
	fontFamily: "Courier New",
	fontSize: "2.5em",
	fontWeight: "800",
	color: constants.HOME_PAGE_LIGHT_TEXT_COLOR
});

const SpecialText = styled("span")({
	fontFamily: "Courier New",
	fontSize: "2.5em",
	fontWeight: "800",
	color: constants.HOME_PAGE_TYPING_TEXT_COLOR,
});