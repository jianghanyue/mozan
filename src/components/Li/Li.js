import React, { Component } from 'react';
import './Li.css';
import gouwuren from './gouwuren_07.jpg'

class Li extends Component {
  render() {
    return (
      <li className="clearfix">
        <div className="bcg"></div>
        <img src={gouwuren} alt=""/>
        <div>
          <a href="#">龙之谷六周年限定礼包大Boss冰龙款男士T恤</a>
          <span>款式：iPhone 5</span>
          <span>尺码：XL</span>
        </div>
        <a className="clear" href="javascript:void(0);">×</a>
        <span>￥<span className="zongjia">79</span>.00</span>
        <a className="jian" href="javascript:void(0);">-</a>
        <span className="shuliang">1</span>
        <a className="jia" href="javascript:void(0);">+</a>
        <span className="danjia">￥79.00</span>
        <div className="clearb clearfix">
          <a className="clearc" href="javascript:void(0);">不删除</a>
          <a className="clearcc" href="javascript:void(0);">确定删除</a>
        </div>
      </li>
    );
  }
}

export default Li;
