import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>{props.children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
