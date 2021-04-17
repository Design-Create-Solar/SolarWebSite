import React, { Component } from "react";
import * as constants from "../MultiplePages/constants";
import { styled } from "@material-ui/styles";
import Button from "../MultiplePages/Button"

class SponsorsPage extends Component {

  handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('https://giving.ucla.edu/campaign/donate.aspx?Fund=64580C&AutoFN=Y');
  }
  render() {
    return (
      <Container>
        <div style={{ height: "100px" }} />
        <h1
          style={{
            color: "white",
            paddingTop: "2%",
            paddingBottom: "2%",
            fontFamily: "Futura",
            margin: "0 0 5px 0",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Sponsorship Packet:{" "}
        </h1>
        <div style={{ display: "flex", justifyContent: "center", height: 700 }}>
          <iframe
            title="sponsorspacket"
            src="https://drive.google.com/file/d/1miL-m87M9KGKtba5hjTUZX6xXt_gnszT/preview"
            width="853.33333333333"
            height="640"
          ></iframe>
        </div>
        <Button onClick={this.handleClick.bind(this)} style={{ margin: "auto", marginTop: 0, marginBottom: "2rem" }}>
          Donate
        </Button>
      </Container>
    );
  }
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "none",
  backgroundColor: constants.HOME_PAGE_DARK_COLOR,
});

export default SponsorsPage;
