// const { createContext } = require("react");

//import { createContext } from "react";
import React, {Component, useState} from "react"
import CheckUser from "./api"
const UserContext = React.createContext()

function UserProvider(props) {
    let [userData, setUserData] = useState(CheckUser())
    let value = {userData, setUserData}

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

let UserContextConsumer = UserContext.Consumer

export {UserContext, UserProvider, UserContextConsumer};
