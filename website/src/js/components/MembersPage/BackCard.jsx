import React, { Component } from "react"
import { styled } from "@material-ui/core";

class BackCard extends Component {
    render() {
        return (
            <div className="card-side side-back">
                <Email >{this.props.email}</Email>
                <Summary>{this.props.summary}</Summary>
            </div>
        )
    }
}

const Email=styled("p") ({
    fontFamily: "Avenir Next",
    fontWeight: 400,
    opacity: 0.6, 
    fontSize: 25,
    padding: "10% 0 0 0",
    margin: "0 0 0 0"
    // borderStyle: "solid",
    // borderColor: "black"
})

const Summary=styled("p") ({
    fontFamily: "Avenir Next",
    padding: "10% 10% 0 10%", 
    margin: "0 0 0 0"
    // borderStyle: "solid",
    // borderColor: "black"
})

export default BackCard