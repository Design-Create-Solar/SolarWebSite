import React, { Component } from "react";
import * as constants from "../MultiplePages/constants";
import TopBar from "../MultiplePages/TopBar";
import "./card.css";
import { styled } from "@material-ui/styles";
import Tabletop from "tabletop";
import FlipCard from "react-flipcard-2";
import bruh from "styled-components";
import StyledButton from "../MultiplePages/StyledButton";

class MembersPage extends Component {
  constructor() {
    super();
    this.state = {
      // data: [],
      membersData: [],
      teamsData: [],
      isFlipped: false,
    };
  }

  showBack() {
    this.setState({
      isFlipped: true,
    });
  }

  showFront() {
    this.setState({
      isFlipped: false,
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
      // key: "1FuVIG3TqJK7jfQs853T-clF_QsQpi5t4_iIuIRoyxJI",
      key: "1y60qXJduhtREnn98UgHQprO13I5mRzG-XO7wdI8uh-k",
      callback: (googleData) => {
        this.setState({
          membersData: googleData,
        });
      },
      simpleSheet: true,
    });
    Tabletop.init({
      key: "1bOLQA-3072h9-_BmdceXsM4QT3aREskoQSeOQ42kg5k",
      callback: (googleData) => {
        this.setState({
          teamsData: googleData,
        });
      },
      simpleSheet: true,
    });
  }

  render() {
    const { membersData, teamsData } = this.state;
    return (
      <div>
        <constants.Desktop>
          <Container>
            <TopBar history={this.props.history} />
            <Heading>
              <h1
                style={{
                  paddingTop: "5%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                }}
              >
                <a
                  href="https://ucla.zoom.us/j/91281986263"
                  style={{ color: "white" }}
                >
                  Meeting Link
                </a>
              </h1>
              {/* <MeetingInfo>Where: Boelter SCC Space</MeetingInfo> */}
              <h1
                style={{
                  color: "white",
                  paddingTop: "5%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                }}
              >
                The Rest of the Team
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StyledButton
                  onClick={() =>
                    this.props.history.push({ pathname: "/team/officers" })
                  }
                >
                  Officers
                </StyledButton>
                {teamsData.map((obj) => {
                  let pathStr = "/team/" + obj.Name;
                  return (
                    <StyledButton
                      onClick={() =>
                        this.props.history.push({ pathname: pathStr })
                      }
                    >
                      {obj.Name}
                    </StyledButton>
                  );
                })}
              </div>
              <h1
                style={{
                  color: "white",
                  paddingTop: "5%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                }}
              >
                Officers:{" "}
              </h1>
            </Heading>
            <div className="grid-container">
              {membersData
                .filter((obj) => obj["IsLead"] === "TRUE")
                .map((obj) => {
                  return (
                    <FlipCard>
                      {/* FRONT */}
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
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
                  );
                })}
            </div>
          </Container>
        </constants.Desktop>
        <constants.Default>
          <Container>
            <TopBar history={this.props.history} />
            <Heading>
              <h1
                style={{
                  paddingTop: "5%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                }}
              >
                <a
                  href="https://ucla.zoom.us/j/91281986263"
                  style={{ color: "white" }}
                >
                  Meeting Link
                </a>
              </h1>

              <h1
                style={{
                  color: "white",
                  paddingTop: "5%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                }}
              >
                The Rest of the Team
              </h1>

              <h1
                style={{
                  color: "white",
                  paddingTop: "5%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                }}
              >
                Officers:{" "}
              </h1>
            </Heading>
            <div className="grid-container">
              {membersData.map((obj) => {
                return (
                  <FlipCard>
                    {/* FRONT */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
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
                );
              })}
            </div>
          </Container>
        </constants.Default>
        <constants.Mobile>
          <Container>
            <TopBar history={this.props.history} />
            <Heading>
              <h1
                style={{
                  paddingTop: "5%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                }}
              >
                <a
                  href="https://ucla.zoom.us/j/91281986263"
                  style={{ color: "white" }}
                >
                  Meeting Link
                </a>
              </h1>
              <h1
                style={{
                  color: "white",
                  paddingTop: "5%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                }}
              >
                The Rest of the Team
              </h1>

              <h1
                style={{
                  color: "white",
                  paddingTop: "5%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                }}
              >
                Officers:{" "}
              </h1>
            </Heading>
            <div className="grid-container">
              {membersData.map((obj) => {
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
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <ImageThing image={obj.Image} />
                      <TextPart>
                        <div>{obj.Name}</div>
                        <div>{obj.Position}</div>
                      </TextPart>
                    </div>

                    {/* BACK */}
                    <Back>
                      <div style={{ flexGrow: 1 }}>
                        {obj.Bio.substr(0, 350)}
                        {obj.Bio.length > 350 && "..."}
                      </div>
                      <div style={{}}>{obj.Email}</div>
                    </Back>
                  </FlipCard>
                );
              })}
            </div>
          </Container>
        </constants.Mobile>
      </div>
    );
  }
}

const Back = styled("div")({
  fontFamily: "Futura",
  fontSize: "1.1rem",
  display: "flex",
  flexDirection: "column",
  height: "100%",

  color: constants.HOME_PAGE_DARK_TEXT_COLOR,
});

const ImageThing = bruh.div`
    background-image: url(${(props) => props.image});
    height: 70%;
    background-size: contain; 
    background-repeat: no-repeat;
    background-position: center;
    flex-grow: 1;
    margin-bottom: 1rem;
`;

const TextPart = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Futura",
  fontSize: "1.4rem",
  fontWeight: 550,
  color: constants.MEMBERS_PAGE_LIGHT_GRAY,
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "none",
  backgroundColor: constants.HOME_PAGE_DARK_COLOR,
});

const Heading = styled("div")({
  padding: "30px 0px 60px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export default MembersPage;
