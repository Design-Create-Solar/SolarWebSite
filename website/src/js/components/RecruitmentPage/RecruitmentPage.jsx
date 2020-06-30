import React, { Component } from "react";
import { styled } from "@material-ui/styles";
import * as constants from "../MultiplePages/constants";
import TopBar from "../MultiplePages/TopBar";
import { Default, Mobile, Desktop } from "../MultiplePages/constants";

export default class RecruitmentPage extends Component {
  render() {
    return (
      <Container>
        <TopBar history={this.props.history} />
        <Desktop>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc2fQoHgrmrQSVNNdTDIXKew-SNxTc6g-ALmlwZkCraILVgwA/viewform?embedded=true"
              width="640"
              height="975"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </Desktop>
        <Default></Default>
        <Mobile></Mobile>
      </Container>
    );
  }
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "scroll",
  backgroundColor: constants.HOME_PAGE_DARK_COLOR,
});
