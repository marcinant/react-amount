import React from 'react';
import logo from './logo.svg';
import AmountInputContainer from './AmountInputContainer';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React + redux localized Amount Input</h1>
      </header>
      <p>Amount: </p>
      <AmountInputContainer />
    </div>
  );
}

export default App;
