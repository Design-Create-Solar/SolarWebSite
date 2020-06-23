import React from "react";
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
import "./futura/futur.ttf";
//import test from './js/components/sockettest.jsx'
import test from "./js/components/Login/login.jsx";

ReactDOM.render(
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
        </Switch>
      </ScrollToTop>
      <BottomBanner />
    </div>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
