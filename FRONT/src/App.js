import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestApi from './TestApi';
import Deck from './Deck';
import { Button } from 'reactstrap';

class App extends Component {

  render() {
    return (
      <div >
      <h1 class="text-center">A random movie of Denzel</h1>
      
      <Deck/>
      </div>
    );
  }
}

export default App;
