import React, { useState } from "react";
import axios from "axios";

const UserContext = React.createContext();

function UserProvider(props) {
  const [userData, setUserData] = useState(null);
  if (userData === null) { // when not null, would just look at state directly
    let token = localStorage.getItem("auth-token"); // see if one already exists in local storage
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    axios
      .post("http://localhost:5000/users/tokenIsValid", null, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        if (res.data) {
          axios
            .get("http://localhost:5000/users/", {
              headers: { "auth-token": token },
            })
            .then((res) => {
              setUserData({ token: token, user: res.data._id });
            });
        }
      });
  }

  return (
    <UserContext.Provider value={{ userData, setUserData }}>{props.children}</UserContext.Provider>
  );
}

let UserContextConsumer = UserContext.Consumer;

export { UserContext, UserProvider, UserContextConsumer };
