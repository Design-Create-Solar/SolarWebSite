import { styled } from "@material-ui/styles";
import React from "react";
import * as constants from "../MultiplePages/constants";
import Typing from "react-typing-animation";
import Box from "@material-ui/core/Box";
import { Default, Mobile, Desktop } from "../MultiplePages/constants";
import Logo from './logo2.png';

const texts = ["DESIGNERS", "CREATORS", "SOLAR"];

const base = "WE ARE  ";

const LogoHolder = () => {
  return (
    <Container>
      <Default>
        <img alt="logo" src={Logo} style={{ height: "35em", paddingBottom: "2em" }} />
      </Default>
      <Desktop>
        <img alt="logo" src={Logo} style={{ height: "35em", paddingBottom: "2em" }} />
      </Desktop>
      <Mobile>
        <img alt="logo" src={Logo} style={{ width: "60%", paddingBottom: "2em" }} />
      </Mobile>
      <Box style={{ minHeight: "5rem", textAlign: "center" }}>
        <Typing loop={true} hideCursor={true}>
          <Text>{base}</Text>
          <SpecialText>{texts[0]}</SpecialText>
          <Typing.Backspace count={texts[0].length + 1} delay={1500} />
          <SpecialText>{texts[1]}</SpecialText>
          <Typing.Backspace count={texts[1].length + 1} delay={1500} />
          <SpecialText>{texts[2]}</SpecialText>
          <Typing.Backspace
            count={texts[2].length + base.length + 3}
            delay={1000}
          />
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
});

const Text = styled("span")({
  fontFamily: "Futura",
  fontSize: "2.9rem",
  fontWeight: "550",
  color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
});

const SpecialText = styled("span")({
  fontFamily: "Futura",
  fontSize: "2.9rem",
  fontWeight: "400",
  color: constants.HOME_PAGE_YELLOW,
});
