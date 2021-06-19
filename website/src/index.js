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
import SubsystemPage from "./js/components/MembersPage/SubsystemPage";
import RecruitmentPage from "./js/components/RecruitmentPage/RecruitmentPage";
import BlocksPage from "./js/components/BlocksPage/BlocksPage";
// import EditMembersPage from "./js/components/EditMembersPage/EditMembersPage";

import TopBar from "./js/components/MultiplePages/TopBar";

import "./futura/futur.ttf";
import test from "./js/components/sockettest.jsx";

import "./assets/base.css";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";

import { UserProvider } from "./js/components/Login/UserContext";
import { BlocksProvider } from "./js/components/BlocksPage/BlocksContext";
import LoginWrapper from "./js/components/Login/LoginWrapper";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <UserProvider>
          <TopBar />
          <ScrollToTop>
            <Switch>
              <BlocksProvider>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/home" component={LandingPage} />
                <Route path="/programs" component={ProjectPage} />
                <Route exact path="/team/officers" component={MembersPage} />
                <Route path="/sponsors" component={SponsorsPage} />
                <Route path="/test" component={test} />
                <Route path="/team" component={SubsystemPage} />
                <Route path="/join" component={RecruitmentPage} />
                <Route path="/login">
                  <Login />
                </Route>
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
    </Router>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
