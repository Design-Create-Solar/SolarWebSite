import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './js/components/LandingPage';
import ProjectPage from './js/components/ProjectPage';
import MembersPage from "./js/components/MembersPage/MembersPage";
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import TopBar from './js/components/TopBar'
import BottomBanner from './js/components/BottomBanner';
  

ReactDOM.render(
    <Router>
        <div>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={LandingPage} />
            <Route path="/programs" component={ProjectPage} />
            <Route path="/team" component={MembersPage} />
        </Switch>
        <BottomBanner/>
        </div>
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
