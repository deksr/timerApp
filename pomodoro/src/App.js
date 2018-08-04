import React, { Component } from 'react';
import Timer from './Components/Timer/Timer';
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App timerPage">
        <Timer />  
      </div>
    );
  }
}

export default App;
