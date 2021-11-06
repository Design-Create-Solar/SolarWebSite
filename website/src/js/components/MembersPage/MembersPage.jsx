import React, { useState, useEffect } from "react";
import * as constants from "../MultiplePages/constants";
import "./card.css";
import FlipCard from "react-flipcard-2";
import { styled } from "@material-ui/styles";
import StyledButton from "../MultiplePages/StyledButton";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import usePrevious from "../../../utils/hooks/usePrevious";

const MembersPage = () => {
  const [data, setData] = useState({
    membersData: [],
    teamsData: [],
    isFlipped: false,
    teamName: "officers",
  });
  const prevData = usePrevious(data);

  // const showBack = () => {
  //   setData({
  //     ...data,
  //     isFlipped: true,
  //   });
  // };

  // const showFront = () => {
  //   setData({
  //     ...data,
  //     isFlipped: false,
  //   });
  // };

  // const handleOnFlip = (flipped) => {
  //   if (flipped) {
  //     this.refs.backButton.getDOWNode().focus();
  //   }
  // };

  // const handleKeyDown = (e) => {
  //   if (this.state.isFlipped && e.keyCode === 27) {
  //     this.showFront();
  //   }
  // };

  useEffect(() => {
    fetch("http://localhost:5000/sheets/members", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setData({
          ...data,
          membersData: result.data,
        });
      });

    fetch("http://localhost:5000/sheets/team", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setData({
          ...data,
          teamsData: result.data,
        });
      });
  });

  useEffect(() => {
    if (!prevData) return;
    if (prevData.teamName === data.teamName)
      setData({
        ...data,
        teamsData: data.teamsData.filter((x) => x["Name"] === data.teamName),
      });
  }, [data, prevData]);

  return (
    <Container>
      <constants.Desktop>
        <Heading>
          <MiniHeader>
            <a
              href="https://ucla.zoom.us/j/91281986263"
              style={{ color: "white" }}
            >
              Meeting Link
            </a>
          </MiniHeader>
          {/* <MeetingInfo>Where: Boelter SCC Space</MeetingInfo> */}
          <MiniHeader>The Rest of the Team</MiniHeader>
          <div className="grid-container">
            <StyledButton
              onClick={() => setData({ ...data, teamName: "officers" })}
            >
              Officers
            </StyledButton>
            {data.teamsData.map((obj) => {
              return (
                <StyledButton
                  onClick={() => setData({ ...data, teamName: obj.Name })}
                >
                  {obj.Name}
                </StyledButton>
              );
            })}
          </div>
          {data.teamName === "officers" ? (
            <MiniHeader>Officers: </MiniHeader>
          ) : (
            data.teamsData
              .filter((obj) => obj["Name"] === data.teamName)
              .map((obj) => <TeamDescrip>{obj.Descrip}</TeamDescrip>)
          )}
        </Heading>
        <div className="grid-container">
          <TransitionGroup component={null}>
            {data.membersData
              .filter((obj) => {
                if (data.teamName === "officers")
                  return obj["IsLead"] === "TRUE";
                else return obj["Team"] === data.teamName;
              })
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
                        <ImageThing
                          style={{ backgroundImage: `url(${obj.Image})` }}
                        />
                        <TextPart>
                          <div>{obj.Name}</div>
                          <div>{obj.Position}</div>
                        </TextPart>
                      </div>

                      {/* BACK */}
                      <Back>
                        <div style={{ flexGrow: 1 }}>{obj.Bio}</div>
                        <div>{obj.Email}</div>
                      </Back>
                    </FlipCard>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </div>
      </constants.Desktop>
      <constants.Default>
        <Heading>
          <MiniHeader>
            <a
              href="https://ucla.zoom.us/j/91281986263"
              style={{ color: "white" }}
            >
              Meeting Link
            </a>
          </MiniHeader>
          <MiniHeader>The Rest of the Team</MiniHeader>
          <div className="grid-container">
            <StyledButton
              onClick={() => setData({ ...data, teamName: "officers" })}
            >
              Officers
            </StyledButton>
            {data.teamsData.map((obj) => {
              return (
                <StyledButton
                  onClick={() => setData({ ...data, teamName: obj.Name })}
                >
                  {obj.Name}
                </StyledButton>
              );
            })}
          </div>
          {data.teamName === "officers" ? (
            <MiniHeader>Officers: </MiniHeader>
          ) : (
            data.teamsData
              .filter((obj) => {
                if (data.teamName === "officers")
                  return obj["IsLead"] === "TRUE";
                else return obj["Name"] === data.teamName;
              })
              .map((obj) => <TeamDescrip>{obj.Descrip}</TeamDescrip>)
          )}
        </Heading>
        <div className="grid-container">
          <TransitionGroup component={null}>
            {data.membersData
              .filter((obj) => {
                if (data.teamName === "officers")
                  return obj["IsLead"] === "TRUE";
                else return obj["Team"] === data.teamName;
              })
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
                        <ImageThing
                          style={{ backgroundImage: `url(${obj.Image})` }}
                        />
                        <TextPart>
                          <div>{obj.Name}</div>
                          <div>{obj.Position}</div>
                        </TextPart>
                      </div>

                      {/* BACK */}
                      <Back>
                        <div style={{ flexGrow: 1 }}>{obj.Bio}</div>
                        <div>{obj.Email}</div>
                      </Back>
                    </FlipCard>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </div>
      </constants.Default>
      <constants.Mobile>
        <Heading>
          <h2
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
          </h2>
          <h2
            style={{
              color: "white",
              paddingTop: "5%",
              fontFamily: "Futura",
              margin: "0 0 5px 0",
            }}
          >
            The Rest of the Team
          </h2>
          <div className="grid-container">
            <StyledButton
              onClick={() => setData({ ...data, teamName: "officers" })}
            >
              Officers
            </StyledButton>
            {data.teamsData.map((obj) => {
              return (
                <StyledButton
                  onClick={() => setData({ ...data, teamName: obj.Name })}
                >
                  {obj.Name}
                </StyledButton>
              );
            })}
          </div>
          {data.teamName === "officers" ? (
            <MiniHeader>Officers: </MiniHeader>
          ) : (
            data.teamsData
              .filter((obj) => obj["Name"] === data.teamName)
              .map((obj) => <TeamDescrip>{obj.Descrip}</TeamDescrip>)
          )}
        </Heading>
        <div className="grid-container">
          <TransitionGroup component={null}>
            {data.membersData
              .filter((obj) => {
                if (data.teamName === "officers")
                  return obj["IsLead"] === "TRUE";
                else return obj["Team"] === data.teamName;
              })
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
                        <ImageThing
                          style={{ backgroundImage: `url(${obj.Image})` }}
                        />
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
                        <div>{obj.Email}</div>
                      </Back>
                    </FlipCard>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </div>
      </constants.Mobile>
    </Container>
  );
};
const MiniHeader = styled("h1")({
  color: "white",
  paddingTop: "5%",
  fontFamily: "Futura",
  margin: "0 0 5px 0",
});

const TeamDescrip = styled("h3")({
  color: constants.HOME_PAGE_LIGHT_COLOR,
  fontFamily: "Futura",
  textAlign: "center",
  padding: "1.5rem",
  margin: 0,
});

const Heading = styled("div")({
  padding: "30px 0px 30px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Back = styled("div")({
  fontFamily: "Futura",
  fontSize: "1.1rem",
  display: "flex",
  flexDirection: "column",
  height: "100%",

  color: constants.HOME_PAGE_DARK_TEXT_COLOR,
});

const ImageThing = styled("div")({
  height: "70%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  flexGrow: 1,
  marginBottom: "1rem",
});

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

export default MembersPage;
