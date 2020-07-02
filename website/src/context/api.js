//auth context
import Axios from "axios";
import { useState, useEffect } from "react";

const CheckUser = () => {
  console.log("in checkUser")
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  //runs once at startup
  useEffect(() => {
    console.log("ran checkuser's useeffect")
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "auth-token": token } }
      );
      if (tokenResponse.data) {
        await Axios.get("http://localhost:5000/users/", {
          headers: { "auth-token": token },
        }).then((res) => {
          setUserData({ token: token, user: res.data });
        });
        // setUserData({ token, user: userResponse.data });
      }
    };
    checkLoggedIn();
  }, []);

  return [userData, setUserData]
};

export default CheckUser;
