import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./js/components/HomePage/LandingPage";
import ProjectPage from "./js/components/ProgramsPage/ProjectPage";
import MembersPage from "./js/components/MembersPage/MembersPage";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomBanner from "./js/components/MultiplePages/BottomBanner";
import ScrollToTop from "./js/components/MultiplePages/ScrollToTop";
import SponsorsPage from "./js/components/SponsorsPage/SponsorsPage";
import SubsystemPage from "./js/components/MembersPage/SubsystemPage";
import RecruitmentPage from "./js/components/RecruitmentPage/RecruitmentPage";
import "./futura/futur.ttf";
import test from "./js/components/sockettest.jsx";

import "./assets/base.css";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={LandingPage} />
            <Route path="/programs" component={ProjectPage} />
            <Route exact path="/team/officers" component={MembersPage} />
            <Route path="/sponsors" component={SponsorsPage} />
            {/* <Route path='/data' component={DataPage} /> */}
            <Route path="/test" component={test} />
            <Route path="/team" component={SubsystemPage} />
            <Route path="/join" component={RecruitmentPage} />
          </Switch>
        </ScrollToTop>
        <BottomBanner />
      </div>
    </Router>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
