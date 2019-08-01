import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

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