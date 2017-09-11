import React, { Component } from 'react';
import './Header.css';
import a from './images/men_08.jpg'
import b from './images/logo_03.png'
import c from './images/fsangdajing_03.jpg'
import d from './images/shop_03.jpg'
import e from './images/1.jpg'
import f from './images/2.jpg'
import g from './images/3.jpg'
import gouwudai from './images/gouwudai.svg'
import sousuo from './images/sousuo.svg'
import caidan from './images/caidan.svg'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    const {showtanchuang,currentUrse}=this.props
    const loginstr=(<a onClick={showtanchuang} href="javascript:;">登录</a>)
    const loginstr2=(<a href="javascript:;">{currentUrse}</a>)
    const loginstr3=(<a href="javascript:;">注册</a>)
    const loginstr4=(<a onClick={this.props.tuichu} href="javascript:;">退出</a>)
    return (
      <div className="top_a">
        <div className="top_on">
          <a href="#"><img src={caidan} /></a>
          <Link to='/'><img src={b} alt=""/></Link>
          <div className="denglu">
            <img src={sousuo} alt=""/>
            <img src={gouwudai} alt=""/>
            {currentUrse ? loginstr2 : loginstr}/
            {currentUrse ? loginstr4 : loginstr3}
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
