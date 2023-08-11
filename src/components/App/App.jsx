import React from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  // GET in here!
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Louie</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/louie_window.jpeg"/>
      </div>
    );
}

export default App;
