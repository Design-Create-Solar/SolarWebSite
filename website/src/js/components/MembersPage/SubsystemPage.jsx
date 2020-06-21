import React, { Component } from "react"
import * as constants from "../MultiplePages/constants"
import TopBar from "../MultiplePages/TopBar"
import Tabletop from "tabletop"
import FlipCard from "react-flipcard-2"
import bruh from 'styled-components';
import { styled } from '@material-ui/styles'

class SubsystemPage extends Component {

  constructor() {
    super()
    this.state = {
      // data: [],
      membersData: [],
      teamsData: [],
      isFlipped: false,
      teamName: ""
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
      key: "1y60qXJduhtREnn98UgHQprO13I5mRzG-XO7wdI8uh-k",
      callback: googleData => {
        this.setState({
          membersData: googleData
        })
      },
      simpleSheet: true
    })
    Tabletop.init({
        key: "1bOLQA-3072h9-_BmdceXsM4QT3aREskoQSeOQ42kg5k",
        callback: googleData => {
            this.setState({
            teamsData: googleData
            })
        },
        simpleSheet: true
    })
  }

  renderMembers() {
      this.state.membersData.map((obj, index) => {
          console.log(obj)
      })
  }

  render() {
    const teamName = this.props.location.pathname.split("/")[2]
    const { membersData, teamsData } = this.state

    return (
      <div>
        <constants.Desktop>
          <Container>
            <TopBar history={this.props.history} />
            <div style={{paddingTop: "5rem"}}>
            {
                teamsData.filter(obj => obj["Name"]===teamName).map(obj => {
                    return (
                        <h3 style={{color: constants.HOME_PAGE_LIGHT_COLOR, fontFamily: "Futura", paddingLeft: "1.5rem"}}>
                            {obj.Descrip}
                        </h3>
                    )
                })
            }
            </div>
            <div className="grid-container">
            {
                membersData.filter(obj => obj["Team"]===teamName).map(obj => {
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
                })
              }
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
            <div style={{paddingTop: "5rem"}}>
            {
                teamsData.filter(obj => obj["Name"]===teamName).map(obj => {
                    return (
                        <h3 style={{color: constants.HOME_PAGE_LIGHT_COLOR, fontFamily: "Futura", paddingLeft: "1.5rem"}}>
                            {obj.Descrip}
                        </h3>
                    )
                })
            }
            </div>
            <div className="grid-container">
            {
                membersData.filter(obj => obj["Team"]==={teamName}).map(obj => {
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
                })
              }
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
            <div style={{paddingTop: "5rem"}}>
            {
                teamsData.filter(obj => obj["Name"]===teamName).map(obj => {
                    return (
                        <h3 style={{color: constants.HOME_PAGE_LIGHT_COLOR, fontFamily: "Futura", paddingLeft: "1.5rem"}}>
                            {obj.Descrip}
                        </h3>
                    )
                })
            }
            </div>
            <div className="grid-container">
            {
                membersData.filter(obj => obj["Team"]==={teamName}).map(obj => {
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
                })
              }
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


export default SubsystemPage;