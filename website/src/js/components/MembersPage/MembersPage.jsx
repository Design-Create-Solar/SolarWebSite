import React, { Component } from "react"
import * as constants from "../../constants"
import TopBar from "../TopBar"
import "./card.css"
import Card from "./Card"
import {styled} from '@material-ui/styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Tabletop from "tabletop"
 
class MembersPage extends Component  {
 
   constructor() {
     super()
     this.state = {
       data: []
     }
   }
 
   componentDidMount() {
     Tabletop.init({
       key: "1y60qXJduhtREnn98UgHQprO13I5mRzG-XO7wdI8uh-k",
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
       <Container>
           <TopBar history={this.props.history}/>
           <Heading>
                   <h2 style={{color: "white", paddingTop: "5%", fontFamily: "Avenir Next", margin: "0 0 5px 0"}}>Meeting Info: </h2>
                   <MeetingInfo>Where: Boelter SCC Space</MeetingInfo>
                   <MeetingInfo>General Meetings: Tuesdays 5-7PM</MeetingInfo>
                   <MeetingInfo>Technical Meetings: Thursdays 5-7PM</MeetingInfo>
                   <AnchorLink offset="90" href="#join_team_form" style={{color: "white", fontFamily: "Avenir Next", marginTop: "2%", fontSize: "50px", textDecoration: "none", fontWeight: "500"}}>
                     Join the team
                   </AnchorLink>
           </Heading>
           <div className="grid-container">
           {
             data.map(obj => {
               return (
                 <Card name={obj.Name}
                         position={obj.Position}
                         image={obj.Image}
                         email={obj.Email}
                         summary={obj.Bio}
                   />
               )
           })}
           </div>
           <a id="join_team_form" style={{ paddingTop: "1%", color: "white", display: "flex", justifyContent: "center"}}>
             <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2fQoHgrmrQSVNNdTDIXKew-SNxTc6g-ALmlwZkCraILVgwA/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="0" marginwidth="0">
               Loading…
             </iframe>
           </a>
       </Container>
     );
   }
 };
 
const Container = styled('div')({
   display: "flex",
   flexDirection:"column",
   width:"100%",
   height:"100%",
   overflow:"none",
   backgroundColor: constants.HOME_PAGE_DARK_COLOR
})
 
const Heading = styled('div') ({
 padding: "30px 0px 60px 0px",
 display: "flex",
 flexDirection: "column",
 justifyContent: "center",
 alignItems: "center",
})
 
const MeetingInfo = styled('p') ({
 textAlign: "center",
 padding: "0 0 0 0",
 margin: "0 0 0 0",
 fontFamily: "Avenir Next",
 color: constants.HOME_PAGE_LIGHT_COLOR
})
 
export default MembersPage
