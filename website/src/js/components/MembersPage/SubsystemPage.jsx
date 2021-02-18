import React, { Component } from "react";
import * as constants from "../MultiplePages/constants";
import Tabletop from "tabletop";
import FlipCard from "react-flipcard-2";
import bruh from "styled-components";
import { styled } from "@material-ui/styles";
import StyledButton from "../MultiplePages/StyledButton";
import Heading from "./Heading";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class SubsystemPage extends Component {
  constructor() {
    super();
    this.state = {
      // data: [],
      membersData: [],
      teamsData: [],
      isFlipped: false,
      teamName: "",
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
      // key: "1y60qXJduhtREnn98UgHQprO13I5mRzG-XO7wdI8uh-k", // 2019-2020
      key: "1Wa4MF0b-60QC1rmuP6A2jJmMIJL62NlvlG-NhhaCnR0", // 2020-2021
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
    const teamName = this.props.location.pathname.split("/")[2];
    const { membersData, teamsData } = this.state;

    return (
      <div>
        <constants.Desktop>
          <Container>
            <Heading>
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
                  margin: "1rem",
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
              {teamsData
                .filter((obj) => obj["Name"] === teamName)
                .map((obj) => {
                  return (
                    <h3
                      style={{
                        color: constants.HOME_PAGE_LIGHT_COLOR,
                        fontFamily: "Futura",
                        paddingLeft: "1.5rem",
                      }}
                    >
                      {obj.Descrip}
                    </h3>
                  );
                })}
            </Heading>

            <div className="grid-container">
              <TransitionGroup component={null}>
                {membersData
                  .filter((obj) => obj["Team"] === teamName)
                  .map((obj) => {
                    return (
                      <CSSTransition classNames="cardboi" timeout={300}>
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
                      </CSSTransition>
                    );
                  })}
              </TransitionGroup>
            </div>
          </Container>
        </constants.Desktop>
        <constants.Default>
          <Container>
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
                margin: "1rem",
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
            <div style={{ paddingTop: "5rem" }}>
              {teamsData
                .filter((obj) => obj["Name"] === teamName)
                .map((obj) => {
                  return (
                    <h3
                      style={{
                        color: constants.HOME_PAGE_LIGHT_COLOR,
                        fontFamily: "Futura",
                        paddingLeft: "1.5rem",
                      }}
                    >
                      {obj.Descrip}
                    </h3>
                  );
                })}
            </div>
            <div className="grid-container">
              <TransitionGroup component={null}>
                {membersData
                  .filter((obj) => obj["Team"] === teamName)
                  .map((obj) => {
                    return (
                      <CSSTransition classNames="cardboi" timeout={300}>
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
                      </CSSTransition>
                    );
                  })}
              </TransitionGroup>
            </div>
          </Container>
        </constants.Default>
        <constants.Mobile>
          <Container>
            <Heading>
              <h1
                style={{
                  color: "white",
                  paddingTop: "10%",
                  fontFamily: "Futura",
                  margin: "0 0 5px 0",
                  textAlign: "center",
                }}
              >
                The Rest of the Team
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
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
              <div style={{ paddingTop: "5rem" }}>
                {teamsData
                  .filter((obj) => obj["Name"] === teamName)
                  .map((obj) => {
                    return (
                      <h3
                        style={{
                          color: constants.HOME_PAGE_LIGHT_COLOR,
                          fontFamily: "Futura",
                          paddingLeft: "1.5rem",
                        }}
                      >
                        {obj.Descrip}
                      </h3>
                    );
                  })}
              </div>
            </Heading>
            <div className="grid-container">
              <TransitionGroup component={null}>
                {membersData
                  .filter((obj) => obj["Team"] === teamName)
                  .map((obj) => {
                    return (
                      <CSSTransition classNames="cardboi" timeout={300}>
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
                      </CSSTransition>
                    );
                  })}
              </TransitionGroup>
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

export default SubsystemPage;
