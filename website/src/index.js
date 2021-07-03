import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./js/components/HomePage/LandingPage";
import ProjectPage from "./js/components/ProgramsPage/ProjectPage";
import MembersPage from "./js/components/MembersPage/MembersPage";
import Login from "./js/components/Login/Login";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomBanner from "./js/components/MultiplePages/BottomBanner";
import ScrollToTop from "./js/components/MultiplePages/ScrollToTop";
import SponsorsPage from "./js/components/SponsorsPage/SponsorsPage";
import RecruitmentPage from "./js/components/RecruitmentPage/RecruitmentPage";
import BlocksPage from "./js/components/BlocksPage/BlocksPage";
// import EditMembersPage from "./js/components/EditMembersPage/EditMembersPage";

import SideMenu from "./js/components/MultiplePages/SideMenu";

import "./futura/futur.ttf";
import test from "./js/components/sockettest.jsx";

import "./assets/base.css";

import { UserProvider } from "./js/components/Login/UserContext";
import { BlocksProvider } from "./js/components/BlocksPage/BlocksContext";
import LoginWrapper from "./js/components/Login/LoginWrapper";

ReactDOM.render(
  <Router>
    <UserProvider>
      <SideMenu />
      <ScrollToTop>
        <Switch>
          <BlocksProvider>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={LandingPage} />
            <Route path="/programs" component={ProjectPage} />
            <Route path="/sponsors" component={SponsorsPage} />
            <Route path="/test" component={SideMenu} />
            <Route path="/team" component={MembersPage} />
            <Route path="/join" component={RecruitmentPage} />
            <Route path="/login" component={Login} />
            <Route path="/blocks">
              <LoginWrapper>
                <BlocksPage />
              </LoginWrapper>
            </Route>
            {/* <Route path="/editmembers">
              <LoginWrapper>
                <EditMembersPage />
              </LoginWrapper>
            </Route> */}
          </BlocksProvider>
        </Switch>
      </ScrollToTop>
      <BottomBanner />
    </UserProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
