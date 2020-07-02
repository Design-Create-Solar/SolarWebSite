// const { createContext } = require("react");

//import { createContext } from "react";
import React, { useState } from "react";
import CheckUser from "./api";
const UserContext = React.createContext({
  user: undefined,
  token: undefined,
});

function UserProvider(props) {
  console.log("in UserProvider")
  let [userData, setUserData] = useState(CheckUser());
  console.log(userData)
  console.log(setUserData)
  let value = { userData, setUserData };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

let UserContextConsumer = UserContext.Consumer;

export { UserContext, UserProvider, UserContextConsumer };
