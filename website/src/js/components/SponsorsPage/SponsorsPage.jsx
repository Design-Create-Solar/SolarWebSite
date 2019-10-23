import React, { Component } from "react"
import * as constants from "../../constants"
import TopBar from "../TopBar"
import {styled} from '@material-ui/styles'

class SponsorsPage extends Component  {
    render() {
      return (
        <Container>
            <MsgBox>
              <Msg>We're working on it</Msg>
            </MsgBox>
            <TopBar history={this.props.history}/>
        </Container>
      );
    }
  };

const MsgBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center"
})
  
const Msg = styled("h1") ({
  fontFamily: "Futura",
  color: "white",
  borderStyle: "dashed",
  padding: "3em 3em", 
  borderColor: constants.HOME_PAGE_YELLOW
})

const Container = styled('div')({
    display: "flex",
    flexDirection:"column",
    width:"100%",
    height:"100%",
    overflow:"none",
    backgroundColor: constants.HOME_PAGE_DARK_COLOR
})

export default SponsorsPage