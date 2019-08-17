import React, { Component } from "react"
import * as constants from "../../constants"
import TopBar from "../TopBar"
import "./card.css"
import Card from "./Card"
import {styled} from '@material-ui/styles'

const memberInfo = [
  {
      name: "Card 1",
      position: "President",
      image: [require('../../../images/person1.jpg')], 
      email: "email1@g.ucla.edu",
      summary: "I'm interested in world peace and pancakes. I'm in this club to make cool things." 
  },
  {
      name: "Card 2",
      position: "Vice President",
      image: [require('../../../images/usericon.png')],
      email: "email2@g.ucla.edu",
      summary: "I'm interested in cats and poodles. I'm in this club to interact with people from different majors." 
  },
  {
    name: "Card 3",
    position: "Prom King",
    image: [require('../../../images/usericon.png')],
    email: "email3@g.ucla.edu",
    summary: "I'm interested in water and bushes. I'm in this club to inhale poisonous fumes." 
  },
  {
    name: "Card 4",
    position: "Head Honcho",
    image: [require('../../../images/usericon.png')],
    email: "email@g.ucla.edu",
    summary: "I'm interested in mechas and space. I'm in this club to immerse myself in fun." 
  },
  {
    name: "Card 5",
    position: "Ultimate Mama",
    image: [require('../../../images/usericon.png')],
    email: "email@g.ucla.edu",
    summary: "I'm interested in bananas and frosting. I'm in this club to tinker better than Tinker Bell.aassssagqfsgdjgafwjgyef asdhfaos aosidhfoaisd oashdfoiadsfi oiaus dof oiaj dsfoi oasidf uoaisdhf " 
  },
  {
    name: "Card 6",
    image: [require('../../../images/usericon.png')]
  }
]

class MembersPage extends Component  {
    render() {
      return (
        <Container>
            <TopBar history={this.props.history}/>
            <Heading>
                    <PageName>Members</PageName>
                    <MeetingInfo>Under the full moon, 2 a.m. sharp every second Monday of the month</MeetingInfo>
            </Heading>
            <div className="grid-container">
              <Card name={memberInfo[0].name} position={memberInfo[0].position} image={memberInfo[0].image} email={memberInfo[0].email} summary={memberInfo[0].summary} /> 
              <Card name={memberInfo[1].name} position={memberInfo[1].position} image={memberInfo[1].image} email={memberInfo[1].email} summary={memberInfo[1].summary} />
              <Card name={memberInfo[2].name} position={memberInfo[2].position} image={memberInfo[2].image} email={memberInfo[2].email} summary={memberInfo[2].summary} />
              <Card name={memberInfo[3].name} position={memberInfo[3].position} image={memberInfo[3].image} email={memberInfo[3].email} summary={memberInfo[3].summary} />
              <Card name={memberInfo[4].name} position={memberInfo[4].position} image={memberInfo[4].image} email={memberInfo[4].email} summary={memberInfo[4].summary} />
            </div>
        </Container>
      );
    }
  };

  

  const Container = styled('div')({
    display: "flex",
    flexDirection:"column",
    width:"100%",
    height:"100%",
    overflow:"scroll",
    backgroundColor: constants.HOME_PAGE_DARK_COLOR
})

const Heading = styled('div') ({
  //background: "pink",/*"linear-gradient(to bottom, #1d2951, white)"*/
  padding: "30px 0px 70px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

const PageName = styled('h3')({
  textAlign: "center",
  fontSize: "100px",
  textShadow: "4px 4px 3px gray",
  color: constants.CONTACT_US_PAGE_YELLOW,
  fontFamily: "Avenir Next",
  padding: "80px 0 0 0",
  margin: "0 0 0 0"
})

const MeetingInfo = styled('p') ({
  textAlign: "center",
  padding: "0 0 0 0",
  margin: "0 0 0 0",
  width: "400px",
  fontFamily: "Avenir Next",
  color: constants.HOME_PAGE_LIGHT_COLOR
})

export default MembersPage
















// export default class MembersPage extends Component {
//     render() {
//         return(
//             <div style={{ backgroundColor: constants.HOME_PAGE_DARK_COLOR }}>
//                 <h1>kill me</h1> 
//                 <div className="card-container">
//                     <div className="card-body">
//                         <FrontCard />
//                         <BackCard />
//                     </div>
//                 </div>
//                 <h1>hit me baby one more time</h1>
//             </div>
//         )
//     }
// }