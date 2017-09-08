import React, { Component } from 'react';
import logo2 from "./images/logo2_03.jpg"
import put from "./images/put3_11.jpg"
import "./Login.css"

class Login extends Component {
  state={
    username:'',
    password:''
  }
changeUsername=(e)=>{
  this.setState({
    username:e.target.value
  })
}
changePassword=(e)=>{
  this.setState({
    password:e.target.value
  })
}
handleChlick=() => {

  this.props.login(this.state.username)
  this.props.hidentanchuang()
}
  render() {
  const {hidetanchuang} = this.props
  const {username,password} = this.state
    return (
      <div className="tanchuang">
        <div className="denglul">
          <a  onClick={hidetanchuang} href="javascript:;">×</a>
          <img src={logo2} alt="" />
          <input type="text"
            value={username}
            onChange={this.changeUsername} placeholder="请输入手机号" />
          <span>请输入正确账号！</span>
          <input type="password"
            value={password}
            onChange={this.changePassword}
          placeholder="请输入密码" />
          <span>请输入正确密码!</span>
          <input type="text" placeholder="请输入验证码" />
          <span>请输入正确验证码！</span>
          <img src={put} alt="" />
          <a
            onClick={this.handleChlick}
          href="javascript:;">登录</a>
          <a href="#">忘记密码？</a>
          <a href="#">注册</a>
          <span></span>
          <span></span>
        </div>
        <a className="fenxiang">
        </a>
      </div>
    );
  }
}

export default Login;
