import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './js/components/LandingPage';
import ProjectPage from './js/components/ProjectPage';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import TopBar from './js/components/TopBar'
  
const BrowserHistory = createBrowserHistory();

ReactDOM.render(


    <Router>
        <div>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={LandingPage} />
            <Route path="/projects" component={ProjectPage} />
        </Switch>
        </div>
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* comments: 
    - should we use MuiThemeProvider? just to get our colors all organized?
    - it's hot
    - styling hurts
        - I'm still plenty confuzzled by all the different ways to 
            override MaterialUI components so if I do sth ugly, 
            change it and lemme know here so I can flourish and learn thx
*/