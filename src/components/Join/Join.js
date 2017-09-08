import React, { Component } from 'react';
import ren from "./images/jiarucheren_03.jpg"
import './Join.css'
import Shangpin from './Shangpin/Shangpin'


class Join extends Component {
  render() {
    return (
      <section className="jiarugouwuche">
  			<div className="section_on clearfix">
  				<div className="top">
            <div className="hed clearfix">
              <h1>已成功加入购物车！</h1>
            </div>
            <div className="shangpin clearfix">
              <img src={ren} alt="" />
              <h2>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h2>
              <div className="guige">
                <span>款式：iPhone 5</span>
                <span>尺码：XL</span>
                <span>数量：xl</span>
              </div>
              <div className="qjs">
                <a href="gouwuche.html">去购物车结算</a>
                <a href="index.html">返回</a>
              </div>
            </div>
            <div className="xiabian clearfix">
              <div className="xias">
                <span>您可能还需要</span>
                <span></span>
              </div>
              <div className="xiax">
                <Shangpin />
                <Shangpin />
                <Shangpin />
                <Shangpin />
                <Shangpin />
              </div>
            </div>
  		</div>
  		</div>
  		</section>
    );
  }
}

export default Join;
