import React, { Component } from 'react';
import yaoshi from "../images/jiaruyaoshi_03.jpg"
import './Shangpin.css';


class Shangpin extends Component {
  render() {
    return (
      <div className="clearfix">
        <img src={yaoshi} alt="" />
        <div className="clearfix">
          <span>龙之谷六周年限定礼包
            <br/>大Boss冰龙款...</span>
          <div className="divv">
            <span>￥88.00</span>
            <a href="#"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Shangpin;
