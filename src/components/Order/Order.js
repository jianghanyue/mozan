import React, { Component } from 'react';
import './Order.css';
import zhifubao from './images/zhifubao_03.jpg'
import xiaoduihao from "./images/xiaoduihao_11.jpg"
import weixin from "./images/weixin_05.jpg"
import weixinm from "./images/weixinm_03.jpg"
import xiaoduihaoo from "./images/xiaoduihao_11.jpg"
import weixinshouji from "./images/weixinshouji_03.jpg"
import xiuchengzhengguo from "./images/xiuchengzhengguo_03.jpg"

class Order extends Component {
  render() {
    return (
      <section>
  			<div className="section_on clearfix">
  				<div className="top">
            <div className="ohed clearfix">
              <h1>收银台</h1>
              <span>付款，购买成功</span>
              <span>填写订单</span>
              <span>购物车</span>
            </div>
          </div>
          <div className="zhongjian clearfix">
  					<span>订单提交成功，请您尽快付款！</span><br />
            <span>请您在提交订单后<span>24小时</span>内完成支付，否则订单会自动取消。</span>
            <span>应付金额: <span>￥168.00</span></span>
          </div>
          <div className="dingdan clearfix">
            <span>订单号：12345678912345</span>
            <span><i className="iconfont">&#xe652;</i>186****0734</span>
            <span><i className="iconfont">&#xe601;</i>迪力木拉提</span><br /><br />
            <span><i className="iconfont">&#xe648;</i>新疆维吾尔族自治区伊犁哈萨克自治州奎屯市乌鲁木齐西路56圆71栋1单元1103号</span>
          </div>
          <div className="zhifufangshi clearfix">
            <span>选择支付方式</span>
            <div><a className="zhifubao biankuang" href="#"><img src={zhifubao} alt="" /><img className="xiaoduigou" src={xiaoduihaoo} alt=""/></a></div>
            <div><a className="weixin" href="#"><img src={weixin} alt=""/><img className="xiaoduigou" src={xiaoduihaoo} alt=""/></a></div>
          </div>
          <a className="fukuan" href="#">付款</a>
          <div className="wxfk clearfix">
            <h3>微信支付</h3>
            <div className="erweima">
              <span>距离二维码过期还剩<span className="daojishi">60</span>秒<br />过期后请刷新页面重新获取二维码</span>
              <img src={weixinm} alt="" />
              <span>请使用微信扫一扫<br />
              扫描二维码支付！</span>
            </div>
            <img src={weixinshouji} alt="" />
          </div>
        </div>
        <div className="xczg">
          <div className="top">
            <div className="hed clearfix">
              <h1>填写订单</h1>
              <span>付款，购买成功</span>
              <span>填写订单</span>
              <span>购物车</span>
            </div>
            <div className="xczg_on clearfix">

              <img src={xiuchengzhengguo} alt="" />
              <div className="zg clearfix">
                <h4>支付成功</h4>
                <span>订单号：12345678912345<br />成功支付：￥168</span>
                <a href="#">查看订单</a>
                <a href="#">继续逛逛</a>

              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Order;
