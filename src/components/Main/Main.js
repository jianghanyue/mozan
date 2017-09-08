import React, { Component } from 'react'
import './Main.css'
import b from './images/ditu_07.jpg'
import c from './images/bichu_07.jpg'
import Banner from '../Banner/Banner'
import Daojishi from './Daojishi/Daojishi'

class Main extends Component {
  state={
  count:1,
  clas:false,
  index: 0,
  index2: 0,
  size: [
    {size: "XXS"},
    {size: "XS"},
    {size: "S"},
    {size: "M"},
    {size: "L"},
    {size: "XL"},
    {size: "XXL"}
  ],
  iphonesizes: [
    {size: "iphone 5"},
    {size: "iphone 6"},
    {size: "iphone 6+"}
  ]
}
handsChlick=()=>{
  this.setState({
    count:this.state.count+1
  })
}
jianClick=()=>{
  if(this.state.count>1){
    this.setState({
      count:this.state.count-1
    })
  }
}
bianseClick=(i)=>{
    this.setState({
      index:i
    })
}
bianseClick2=(i,item)=>{
    this.setState({
      index2:i
    })
    console.log(item);
}
  render () {
    const list = this.state.size.map((item,i)=>(
      <a className={this.state.index === i ? "cor" : ""}
        onClick={()=>this.bianseClick(i)} href="javascript:;" key={i}>{item.size}</a>
    ))
    const list2 = this.state.iphonesizes.map((item,i) => (
      <a className={this.state.index2 === i ? "cor" : ""}
        onClick={()=>this.bianseClick2(i,item)} href="javascript:;" key={i}>{item.size}</a>
    ))
    return (
      <section className="clearfix index">
        <div className="section">
          <Banner />
          <div className="zjm">
            <Daojishi />
            <article className="clearfix">
              <div className="dingjin clearfix">
                <span>定金</span>
                <div className="dj">
                  <b>￥ <b>500.00</b></b><br/>
                  <span>全款金额：￥1500.00</span>
                </div>
              </div>
              <div className="kuanshi clearfix">
                <span>款式</span>
                {list2}
              </div>
              <div className="chima clearfix">
                <span>尺码</span>
                <div className="cm">
                  {list}
                </div>
              </div>
              <div className="shuliang clearfix">
                <span>数量</span>
                <a onClick={this.jianClick} className="jian" href="javascript:;">-</a>
                <span className="shu">{this.state.count}</span>
                <a onClick={this.handsChlick} className="jia" href="javascript:;">+</a>
              </div>
            </article>
          </div>
          <div className="anniu">
            <a className="yuding" href="jiarugouwuche.html">立即预定</a>
          </div>
          <div className="bichu">
            <img className="ditu" src={b}/>
            <img className="buchuc" src={c} alt=""/>
          </div>
        </div>
        </section>
        )
        }
        }
export default Main
