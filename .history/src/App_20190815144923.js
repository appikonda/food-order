import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderFood from './OrderFood.js'
class App extends Component {
  render() {
    return (
      <div>          
      <Panel>
        <Panel.Body>
           <OrderFood/>
         </Panel.Body>
      </Panel>
    </div>
    );
  }
}

export default App;
