import React, { Component } from "react"
import * as constants from "../../constants"
import TopBar from "../TopBar"
import "./card.css"
import Card from "./Card"
import {styled} from '@material-ui/styles';

class MembersPage extends Component  {
    render() {
      return (
        <Container>
            <TopBar history={this.props.history}/>

            <Card /> <Card />
        </Container>
      );
    }
  };

  const Container = styled('div')({
    
    //flexDirection:"column",
    width:"100%",
    height:"100%",
    overflow:"scroll",
    backgroundColor: constants.HOME_PAGE_DARK_COLOR
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