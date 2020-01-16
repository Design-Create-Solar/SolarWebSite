import React, { Component } from "react"
import * as constants from "../../constants"
import TopBar from "../TopBar"
import "./card.css"
import { styled } from '@material-ui/styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Tabletop from "tabletop"
import FlipCard from "react-flipcard-2"
import bruh from 'styled-components';

class MembersPage extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      isFlipped: false,
    }
  }

  showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOWNode().focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: "1FuVIG3TqJK7jfQs853T-clF_QsQpi5t4_iIuIRoyxJI",
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    console.log("update state --->", this.state)
    return (
      <div>
        <constants.Desktop>
          <Container>
            <TopBar history={this.props.history} />
            <Heading>
              <h1 style={{ color: "white", paddingTop: "5%", fontFamily: "Futura", margin: "0 0 5px 0" }}>Meeting Info: </h1>
              <MeetingInfo>Where: Boelter SCC Space</MeetingInfo>
              <MeetingInfo>General Meetings: Tuesdays 5-7PM</MeetingInfo>
              <MeetingInfo>Technical Meetings: Thursdays 5-7PM</MeetingInfo>
              <AnchorLink offset="90" href="#join_team_form" style={{ color: "white", fontFamily: "Futura", marginTop: "2%", fontSize: "50px", textDecoration: "none", fontWeight: "500" }}>
                Join the team
              </AnchorLink>
              <h1 style={{ color: "white", paddingTop: "5%", fontFamily: "Futura", margin: "0 0 5px 0" }}>Officers: </h1>
            </Heading>
            <div className="grid-container">
              {
                data.map(obj => {

                  return (
                    <FlipCard>
                      {/* FRONT */}
                      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                        <ImageThing image={obj.Image} />
                        <TextPart>
                          <div>{obj.Name}</div>
                          <div>{obj.Position}</div>
                        </TextPart>
                      </div>

                      {/* BACK */}
                      <Back>
                        <div style={{ flexGrow: 1 }}>{obj.Bio}</div>
                        <div style={{}}>{obj.Email}</div>
                      </Back>
                    </FlipCard>
                  )
                })}
            </div>

            <a id="join_team_form" style={{ paddingTop: "1%", color: "white", display: "flex", justifyContent: "center" }}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2fQoHgrmrQSVNNdTDIXKew-SNxTc6g-ALmlwZkCraILVgwA/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="0" marginwidth="0">
                Loading…
              </iframe>
            </a>
          </Container>
        </constants.Desktop>
        <constants.Default>
          <Container>
            <TopBar history={this.props.history} />
            <Heading>
              <h1 style={{ color: "white", paddingTop: "5%", fontFamily: "Futura", margin: "0 0 5px 0" }}>Meeting Info: </h1>
              <MeetingInfo>Where: Boelter SCC Space</MeetingInfo>
              <MeetingInfo>General Meetings: Tuesdays 5-7PM</MeetingInfo>
              <MeetingInfo>Technical Meetings: Thursdays 5-7PM</MeetingInfo>
              <AnchorLink offset="90" href="#join_team_form" style={{ color: "white", fontFamily: "Futura", marginTop: "2%", fontSize: "50px", textDecoration: "none", fontWeight: "500" }}>
                Join the team
              </AnchorLink>
              <h1 style={{ color: "white", paddingTop: "5%", fontFamily: "Futura", margin: "0 0 5px 0" }}>Officers: </h1>
            </Heading>
            <div className="grid-container">
              {
                data.map(obj => {

                  return (
                    <FlipCard>
                      {/* FRONT */}
                      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                        <ImageThing image={obj.Image} />
                        <TextPart>
                          <div>{obj.Name}</div>
                          <div>{obj.Position}</div>
                        </TextPart>
                      </div>

                      {/* BACK */}
                      <Back>
                        <div style={{ flexGrow: 1 }}>{obj.Bio}</div>
                        <div style={{}}>{obj.Email}</div>
                      </Back>
                    </FlipCard>
                  )
                })}
            </div>

            <a id="join_team_form" style={{ paddingTop: "1%", color: "white", display: "flex", justifyContent: "center" }}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2fQoHgrmrQSVNNdTDIXKew-SNxTc6g-ALmlwZkCraILVgwA/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="0" marginwidth="0">
                Loading…
              </iframe>
            </a>
          </Container>
        </constants.Default>

        <constants.Mobile>
          <Container>
            <TopBar history={this.props.history} />
            <Heading>
              <h1 style={{ color: "white", paddingTop: "5%", fontFamily: "Futura", margin: "0 0 5px 0" }}>Meeting Info: </h1>
              <MeetingInfo>Where: Boelter SCC Space</MeetingInfo>
              <MeetingInfo>General Meetings: Tuesdays 5-7PM</MeetingInfo>
              <MeetingInfo>Technical Meetings: Thursdays 5-7PM</MeetingInfo>
              <AnchorLink offset="90" href="#join_team_form" style={{ color: "white", fontFamily: "Futura", marginTop: "2%", fontSize: "50px", textDecoration: "none", fontWeight: "500" }}>
                Join the team
              </AnchorLink>
              <h1 style={{ color: "white", paddingTop: "5%", fontFamily: "Futura", margin: "0 0 5px 0" }}>Officers: </h1>

            </Heading>
            <div className="grid-container">
              {
                data.map(obj => {

                  return (
                    // <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", minHeight: "300px", display: "flex", flexDirection: "column", justifyContent: "center", }}>
                    //   <ImageThing image={obj.Image} />
                    //   <TextPart>
                    //     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>{obj.Name}</div>
                    //     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>{obj.Position}</div>
                    //   </TextPart>
                    // </div>

                    <FlipCard>
                      {/* FRONT */}
                      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                        <ImageThing image={obj.Image} />
                        <TextPart>
                          <div>{obj.Name}</div>
                          <div>{obj.Position}</div>
                        </TextPart>
                      </div>

                      {/* BACK */}
                      <Back>
                        <div style={{ flexGrow: 1 }}>{obj.Bio.substr(0, 350)}{obj.Bio.length > 350 && "..."}</div>
                        <div style={{}}>{obj.Email}</div>
                      </Back>
                    </FlipCard>
                  )
                })}
            </div>

            <a id="join_team_form" style={{ paddingTop: "1%", color: "white", display: "flex", justifyContent: "center" }}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2fQoHgrmrQSVNNdTDIXKew-SNxTc6g-ALmlwZkCraILVgwA/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="0" marginwidth="0">
                Loading…
              </iframe>
            </a>
          </Container>
        </constants.Mobile>
      </div >
    );
  }
};

const Back = styled("div")({
  fontFamily: "Futura",
  fontSize: "1.1rem",
  display: "flex",
  flexDirection: "column",
  height: "100%",

  color: constants.HOME_PAGE_DARK_TEXT_COLOR
})

const ImageThing = bruh.div`
    background-image: url(${props => props.image});
    height: 70%;
    background-size: contain; 
    background-repeat: no-repeat;
    background-position: center;
    flex-grow: 1;
    margin-bottom: 1rem;
`

const TextPart = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Futura",
  fontSize: "1.4rem",
  fontWeight: 550,
  color: constants.MEMBERS_PAGE_LIGHT_GRAY,
})

const Container = styled('div')({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "none",
  backgroundColor: constants.HOME_PAGE_DARK_COLOR
})

const Heading = styled('div')({
  padding: "30px 0px 60px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

const MeetingInfo = styled('p')({
  textAlign: "center",
  padding: "0 0 0 0",
  margin: "0 0 0 0",
  fontFamily: "Futura",
  color: constants.HOME_PAGE_LIGHT_COLOR
})

export default MembersPage;