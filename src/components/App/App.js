import React, { Component } from 'react';
import Lyout from '../Lyout/Lyout'
import Main from '../Main/Main'
import Join from '../Join/Join'
import Gouwuche from '../Gouwuche/Gouwuche'
import Tijiaodingdan from '../Tijiaodingdan/Tijiaodingdan'
import Order from '../Order/Order'
import './reset.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Lyout>
          <Main />
        </Lyout>
      </div>
    );
  }
}

export default App;
