import React, { Component } from 'react';
import Lyout from '../Lyout/Lyout'
import Main from '../Main/Main'
import Join from '../Join/Join'
import Gouwuche from '../Gouwuche/Gouwuche'
import Tijiaodingdan from '../Tijiaodingdan/Tijiaodingdan'
import Order from '../Order/Order'
import './reset.css'
import './App.css';
import { HashRouter as Router,Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="wrap">

        <Router>
          <div>
            <Lyout>
              <Route exact path='/' component={Main} />
              <Route path='/join' component={Join} />
              <Route path='/gouwuche' component={Gouwuche} />
              <Route path='/tijiaodingdan' component={Tijiaodingdan} />
              <Route path='/order' component={Order} />
            </Lyout>
            </div>
          </Router>
          {/* <Main  /> */}

      </div>
    );
  }
}

export default App;
