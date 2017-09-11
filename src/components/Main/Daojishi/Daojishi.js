import React, { Component } from 'react';
import './Daojishi.css';
import a from './yushou_03.png'

class Daojishi extends Component {
  state={
    date:"0",
    hour:"0",
    min:"0",
    sec:"0"
  }
  shijian=()=>{
    var tarday=31,tarhour=24,tarminutes=0,tarseconds=0
      var date=new Date()
      var day=date.getDate()
      var hour=date.getHours()
      var minutes=date.getMinutes()
      var seconds=date.getSeconds()
      var nowday=tarday-day,nowhour=tarhour-hour,nowminutes=tarminutes-minutes,nowseconds=tarseconds-seconds
      if(nowseconds<0){
        nowminutes-=1
        nowseconds+=60
      }
      if(nowminutes<0){
        nowhour-=1
        nowminutes+=60
      }
      if(nowhour<0){
        nowday-=1
        nowhour+=24
      }
      if(nowday<10){
        nowday="0"+nowday
      }
      if(nowhour<10){
        nowhour="0"+nowhour
      }
      if(nowminutes<10){
        nowminutes="0"+nowminutes
      }
      if(nowseconds<10){
        nowseconds="0"+nowseconds
      }
      this.setState({
        date:nowday,
        hour:nowhour,
        min:nowminutes,
        sec:nowseconds
      })
  }
  componentDidMount = () => {
    this.time = window.setInterval(this.shijian, 1000)
  }
  componentWillUnmount = () => {
    window.clearInterval(this.time)
  }
  render() {
      const {date,hour,min,sec}=this.state
    return (
    <aside className="clearfix">
      <div className="div">
        <img src={a}/>
        <h1>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h1>
      </div>
      <div className="daojishi">
        <span>距离预售结束</span>
        <div className="jishi">
          <div className="miaoshu">
            <span><span className="day">{date}</span> </span>:
            <span><span className="hour">{hour}</span> </span>:
            <span><span className="minutes">{min}</span> </span>:
            <span><span className="seconds">{sec}</span> </span>
          </div>
          <div className="tianshu">
            <i>天</i>
            <i>时</i>
            <i>分</i>
            <i>秒</i>
          </div>
        </div>
        <span>
          <span>注</span>：商品将于<span>2016/10/5</span>统一发货!</span>
      </div>
    </aside>
    );
  }
}

export default Daojishi;
