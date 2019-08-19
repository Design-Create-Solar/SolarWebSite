import React, { Component } from "react"
import {styled} from '@material-ui/styles'
import * as constants from "../../constants"

// const usericon = require("../../../images/usericon.png");
class FrontCard extends Component {
    render() {
        return (
            <div className="card-side side-front">
               <img src={this.props.image} style={{ margin: 20, borderRadius: "50%", boxShadow: "3px 5px 5px gray" }}/>
               <Name>{this.props.name}</Name>
               <Position>{this.props.position}</Position>
            </div>
        )
    }
}

const Name = styled("h2") ({
    fontFamily: "Avenir Next",
    color: constants.HOME_PAGE_DARK_TEXT_COLOR,
    padding: "0 0 0 0",
    margin: "5px 0 0 0", 
    // borderStyle: "solid", 
    // borderColor: "black"
})

const Position = styled("h3") ({
    fontFamily: "Avenir Next",
    color: constants.MEMBERS_PAGE_LIGHT_GRAY, 
        // TODO: make this a lighter blue
    // borderStyle: "solid", 
    // borderColor: "black",
    padding: "0 0 0 0",
    margin: "0 0 0 0",
    //TODO: get rid of this opacity thing to get rid of that flipping card bug
})

export default FrontCard