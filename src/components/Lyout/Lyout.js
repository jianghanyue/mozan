import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'


class Lyout extends Component {
  state={
    showtanchuang:false,
    currentUrse:""
  }
  showtanchuang=()=>{
    this.setState({
      showtanchuang:true
    })
  }
  hidetanchuang=()=>{
    this.setState({
      showtanchuang:false
    })
  }
  login=(username)=>{
    this.setState({
      currentUrse:username
    })
  }
  hidentanchuang=()=>{
    this.setState({
      showtanchuang:false
    })
  }
  tuichu=()=>{
    this.setState({
      currentUrse:""
    })
    console.log(1);
  }
  render() {
    return (
      <div className="Lyout">
        <Header
          showtanchuang={this.showtanchuang}
          currentUrse={this.state.currentUrse}
          tuichu={this.tuichu}
        />
      { this.state.showtanchuang && <Login
        login={this.login}
        hidentanchuang={this.hidentanchuang}
         hidetanchuang={this.hidetanchuang}

         /> }
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Lyout;
