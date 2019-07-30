import React from 'react';
import logo from './logo.svg';
import './App.css';
import Placeholder from "./js/components/Placeholder"
import Example from './js/components/example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Placeholder></Placeholder>
        <Example/>
      </header>
    </div>
  );
}

export default App;
