import React, { Component } from "react";
import { styled } from "@material-ui/styles";
import * as constants from "../MultiplePages/constants";
import { Default, Mobile, Desktop } from "../MultiplePages/constants";

export default class RecruitmentPage extends Component {
  render() {
    return (
      <Container>
        <Desktop>
          <CenteredDiv>
            <StyledIframe
              title="joinform"
              src="https://docs.google.com/forms/d/e/1FAIpQLSc2fQoHgrmrQSVNNdTDIXKew-SNxTc6g-ALmlwZkCraILVgwA/viewform?embedded=true"
            >
              Loading…
            </StyledIframe>
          </CenteredDiv>
        </Desktop>
        <Default>
          <CenteredDiv>
            <StyledIframe
              title="joinform"
              src="https://docs.google.com/forms/d/e/1FAIpQLSc2fQoHgrmrQSVNNdTDIXKew-SNxTc6g-ALmlwZkCraILVgwA/viewform?embedded=true"
            >
              Loading…
            </StyledIframe>
          </CenteredDiv>
        </Default>
        <Mobile>
          <CenteredDiv>
            <StyledIframe
              title="joinform"
              src="https://docs.google.com/forms/d/e/1FAIpQLSc2fQoHgrmrQSVNNdTDIXKew-SNxTc6g-ALmlwZkCraILVgwA/viewform?embedded=true"
            >
              Loading…
            </StyledIframe>
          </CenteredDiv>
        </Mobile>
      </Container>
    );
  }
}

const StyledIframe = styled("iframe")({
  frameBorder: 0,
  marginHeight: 0,
  marginWidth: 0,
  width: 640,
  height: 975,
});

const CenteredDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "scroll",
  backgroundColor: constants.HOME_PAGE_DARK_COLOR,
});
