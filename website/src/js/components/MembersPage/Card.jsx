import React, { Component } from "react"
import FrontCard from "./FrontCard"
import BackCard from "./BackCard"

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="card-body">
                    <FrontCard />
                    <BackCard />
                </div>
            </div>
        )
    }
}

export default Card