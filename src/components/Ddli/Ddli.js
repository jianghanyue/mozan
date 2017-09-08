import React, { Component } from 'react';
import xiaoduigou from './xiaoduihao_11.jpg'

class Ddli extends Component {
  render() {
    return (
      <li>
        <div className="map clearfix">
          <span>
            <i className="iconfont">&#xe601;</i>阿不来提·阿卜杜热西提</span>
          <span>
            <i className="iconfont">&#xe648;</i>
          新疆维吾尔自治区波尔塔拉蒙古自治州塔格特90团乎热郭木村9连5区13号</span>
          <span>
            <i className="iconfont">&#xe652;</i>
          186****5149</span>
        </div>
        <a className="clearr" href="javascript:void(0);"><i className="iconfont">&#xe6b2;</i>删除</a>
        <a href="javascript:void(0);"><i className="iconfont">&#xe616;</i>编辑</a>
        <a className="morenn" href="javascript:void(0);">设为默认</a>
        <img className="xiaoduigou" src={xiaoduigou} alt="" />
        <div className="clear clearfix">
          <a className="clearc" href="javascript:void(0);">不删除</a>
          <a className="clearcc" href="javascript:void(0);">确定删除</a>
        </div>
      </li>
    );
  }
}

export default Ddli;
