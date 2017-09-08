import React, { Component } from 'react';
import './Tijiaodingdan.css';
import dingdanren from "./images/dingdanren_15.jpg"
import yushou from "./images/yushou_03.png"
import xiaoduigou from "./images/xiaoduihao_11.jpg"
import Ddli from '../Ddli/Ddli'

class Tjiaodingdan extends Component {
  render() {
    return (
      <section>
  			<div className="top">
  				<div className="hhed clearfix">
  					<h1>填写订单</h1>
  					<span>付款，购买成功</span>
  					<span>填写订单</span>
  					<span>购物车</span>
  				</div>
  				<div className="shouhuo clearfix">
  					<h2>收货地址</h2>
            <a className="xinzeng" href="#">新增地址</a>
            <div className="dizhi clearfix">
  						<ul className="clearfix">
                <Ddli />
                <Ddli />
                <Ddli />
                <Ddli />
                <Ddli />
                <Ddli />
              </ul>
            </div>
            <a className="more" href="javascript:void(0);">显示更多</a>
          </div>
        </div>
        <div className="min_on">
          <div className="min clearfix">
            <h3>商品信息</h3>
            <a href="gouwuche.html">返回购物车修改</a>
            <ul>
              <li className="clearfix">
                <img src={dingdanren} alt="" />
                <img src={yushou} alt="" />
                <a href="#">龙之谷六周年限定礼包大Boss冰龙款男士T恤</a>
                <span>×1</span>
                <span>￥79.00</span>
                <span>尺码：XL</span>
                <span>款式：iphone 5</span>
              </li>
              <li className="clearfix">
                <img src={dingdanren} alt="" />
                <img src="" alt="" />
                <a href="#">龙之谷六周年限定礼包大Boss冰龙款男士T恤</a>
                <span>×1</span>
                <span>￥79.00</span>
                <span>尺码：XL</span>
                <span>款式：iphone 5</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="zhifu_on">
          <div className="zhifu clearfix">
            <span>支付方式</span>
            <a href="#">
              <span>在线支付</span>
              <img className="xiaoduigou" src={xiaoduigou} alt="" />
            </a>
            <span>物流方式</span>
            <a href="#">
              普通快递
              <img className="xiaoduigou" src={xiaoduigou} alt="" />
            </a>
            <span>发票信息</span>
            <a href="#">
              不开发票
              <img className="xiaoduigou" src={xiaoduigou} alt="" />
            </a>
            <a className="biankuang" href="#">
              开发票
              <img className="xiaoduigou" src={xiaoduigou} alt="" />
            </a>
            <input type="text" />
            <a href="#">保存</a>
          </div>
        </div>
        <div className="down clearfix">
          <div className="down_on">
            <h4>备注</h4>
            <input type="text" />
          </div>
          <div className="shang clearfix">
            <span>数量</span>
            <span>单价</span>
            <span>小计</span>
            <span>优惠</span>
            <span>运费</span>
            <span>实际应付</span>
          </div>
          <div className="xxia">
            <span>2</span>
            <span>×</span>
            <span>￥79.00</span>
            <span>=</span>
            <span>￥158.00</span>
            <span>-</span>
            <span>￥0.00</span>
            <span>+</span>
            <span>￥10.00</span>
            <span>=</span>
            <span>￥168.00</span>
          </div>
          <a className="tijiaodingdan" href="shouyintai.html">提交订单</a>
        </div>
      </section>

    );
  }
}

export default Tjiaodingdan;
