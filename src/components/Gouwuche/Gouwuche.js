import React, { Component } from 'react';
import './Gouwuche.css';
import gouwuchekong from './images/gouwuchekong_03.jpg'
import Li from '../Li/Li'

class Gouwuche extends Component {
  render() {
    return (
      <section className="sgwc">
  			<div className="section_on clearfix">
  				<div className="top">
            <div className="hed clearfix">
              <h1>购物车 <span className="zongshu">[<span>99</span>件]</span></h1>
              <span>购物车</span>
              <span>填写订单</span>
              <span>付款，购买成功</span>
            </div>
          </div>
          <div className="shang clearfix">
            <div className="quanxuan bcg"></div>
            <span>全选</span>
            <span>商品</span>
            <span>单价</span>
            <span>数量</span>
            <span>小计</span>
            <span>操作</span>
          </div>
          <ul className="shangpin">
            <Li />
            <Li />
            <Li />
            <Li />
          </ul>
          <div className="xia">
            <div className="qx bcg"></div>
            <span>全选</span>
            <span><a className="shanchu" href="javascript:void(0);">删除</a></span>
            <span>共 <span className="zsl">4</span> 件商品，已选择 <span className="xzsl">1</span> 件</span>
            <span>合计：<b>￥<span>79</span>.00</b></span>
            <div className="clearb clearfix">
              <a className="clearc" href="javascript:void(0);">不删除</a>
              <a className="clearcc" href="javascript:void(0);">确定删除</a>
            </div>
            <a className="qujiesuan" href="tijiaodingdan.html">去结算</a>
          </div>

        </div>
        <div className="wukong">
          <div className="section_on clearfix">
            <div className="top">
              <div className="hed clearfix">
                <h1>购物车 <span className="zongshu">[<span>99</span>件]</span></h1>
                <span>购物车</span>
                <span>填写订单</span>
                <span>付款，购买成功</span>
              </div>
              <img src={gouwuchekong} alt="" />
            </div>
          </div>
        </div>
        </section>
        );
        }
        }

        export default Gouwuche;
