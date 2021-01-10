import React from "react";
import * as constants from "../MultiplePages/constants";
import TopBar from "../TopBar";

import { styled } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

const AuthPage = (props) => {
  return (
    <Container>
      <TopBar history={props.history} />
      <Heading>
        <h2
          style={{
            color: "white",
            paddingTop: "10%",
            fontFamily: "Avenir Next",
            fontSize: "4em",
            margin: "0 0 5px 0",
          }}
        >
          Sign In
        </h2>
      </Heading>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      ></TextField>
    </Container>
  );
};

export default AuthPage;

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "scroll",
  backgroundColor: constants.HOME_PAGE_DARK_COLOR,
});

const Heading = styled("div")({
  //background: "pink",/*"linear-gradient(to bottom, #1d2951, white)"*/
  padding: "30px 0px 60px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "uppercase",
});
