import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./js/components/HomePage/LandingPage";
import ProjectPage from "./js/components/ProgramsPage/ProjectPage";
import MembersPage from "./js/components/MembersPage/MembersPage";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomBanner from "./js/components/BottomBanner";
import ScrollToTop from "./js/components/ScrollToTop";
import SponsorsPage from "./js/components/SponsorsPage/SponsorsPage";
import login from "./js/components/Login/login";
import register from "./js/components/Login/register";
import upload from "./js/components/Blocks/upload";
import "./futura/futur.ttf";
//import test from './js/components/sockettest.jsx'
import test from "./js/components/Login/login.jsx";
import Axios from "axios";

import checkUser from "./context/api";
import { UserProvider } from "./context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  //runs once at startup
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
        setUserData({ token: undefined, user: undefined });
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
  return (
    <UserProvider>
      <Router>
        <div>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/home" component={LandingPage} />
              <Route path="/programs" component={ProjectPage} />
              <Route path="/team" component={MembersPage} />
              <Route path="/sponsors" component={SponsorsPage} />
              <Route path="/test" component={test} />
              <Route path="/login" component={login} />
              <Route path="/register" component={register} />
              <Route path="/upload" component={upload} />
            </Switch>
          </ScrollToTop>
          <BottomBanner />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
