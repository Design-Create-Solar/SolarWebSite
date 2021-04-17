// const { createContext } = require("react");

//import { createContext } from "react";
import React, { useState } from "react";
import axios from "axios";

const UserContext = React.createContext();

// function checkLoggedIn() {
//   let token = localStorage.getItem("auth-token");
//   if (token === null) {
//     console.log("null token");
//     localStorage.setItem("auth-token", "");
//     token = "";
//   }
//   axios
//     .post("http://localhost:5000/users/tokenIsValid", null, {
//       headers: { "auth-token": token },
//     })
//     .then((res) => {
//       if (res.data) {
//         axios
//           .get("http://localhost:5000/users/", {
//             headers: { "auth-token": token },
//           })
//           .then((res) => {
//             console.log("in tokenres");
//             console.log(res.data);
//             setUserData({ token: token, user: res.data });
//           });
//       }
//     });
// }

function UserProvider(props) {
  console.log("in UserProvider");
  const [userData, setUserData] = useState({});
  if (userData == null) {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      console.log("null token");
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
              console.log("in tokenres");
              console.log(res.data);
              setUserData({ token: token, user: res.data });
            });
        }
      });
  }

  let value = { userData, setUserData };
  console.log(userData);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

let UserContextConsumer = UserContext.Consumer;

export { UserContext, UserProvider, UserContextConsumer };
