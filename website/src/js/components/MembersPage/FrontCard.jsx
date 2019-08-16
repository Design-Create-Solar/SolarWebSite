import React, { Component } from "react"

const usericon = require("../../../images/usericon.png");
class FrontCard extends Component {
    render() {
        return (
            <div className="card-side side-front">
               <img src={usericon} style={{ padding: 20 }}/>
               <h1>Name</h1>
            </div>
        )
    }
}

export default FrontCard