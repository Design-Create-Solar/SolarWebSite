import React, { Component } from "react"
import FrontCard from "./FrontCard"
import BackCard from "./BackCard"

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="card-body">
                    <FrontCard name={this.props.name} 
                                position={this.props.position} 
                                image={this.props.image}/>
                    <BackCard email={this.props.email}
                                summary={this.props.summary}/>
                </div>
            </div>
        )
    }
}

export default Card