import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'
import { Toast } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
@withRouter
class Register extends Component {
    componentDidMount() {
        console.log(this.refs)
    }
    loadingToast = (msg) => {
        Toast.loading(msg, 1);
    }
    registerHandle = () => {
        let username = this.refs.username.value
        let pwd = this.refs.pwd.value
        let pwd2 = this.refs.pwd2.value
        if (pwd !== pwd2) {
            this.loadingToast('两次输入密码不一致！')
        } else {
            axios.post('/node/users/register', {
                username: username,
                password: pwd
            }).then((res) => {
                var status = res.data.status;
                var This = this;
                // console.log(status)
                if (status === 0) {
                    //成功
                    this.loadingToast('注册成功')
                    setTimeout(() => {
                        this.props.history.push('/mine/login')
                    }, 1000)
                }
                else {
                    //失敗
                    this.loadingToast('用户名已存在！')
                    this.props.history.push('/mine/register')
                }
            }).catch(err => {
                this.loadingToast('连接错误！')
                setTimeout(() => {
                    this.props.history.push('/mine/register')
                }, 1000)
            })
        }



    }
    render() {
        return (
            <div className="register_body">
                <div>
                    <input placeholder='请输入用户名' className="register_text" ref='username' type="text" />
                </div>
                <div>
                    <input placeholder='请输入密码' className="register_text" ref='pwd' type="password" />
                </div>
                <div>
                    <input placeholder='确认密码' className="register_text" ref='pwd2' type="password" />
                </div>
                <div className="register_btn">
                    <button onClick={this.registerHandle}>注册</button>
                </div>
                <div className="register_link">
                    <Link to="/mine/login">立即登录</Link>
                    {/* <Link to="/mine/findPassword">找回密码</Link> */}
                </div>
            </div>
        )
    }
}
export default Register