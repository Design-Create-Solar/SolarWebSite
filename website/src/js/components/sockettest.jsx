import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { BACK_BASE_URL } from "./MultiplePages/constants";

class App extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: BACK_BASE_URL
        };
    }
    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => this.setState({ response: data }));
    }
    render() {
        const { response } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                {response
                    ? <p>
                        The temperature in Florence is: {response} °F
              </p>
                    : <p>Loading...</p>}
            </div>
        );
    }
}

export default App;