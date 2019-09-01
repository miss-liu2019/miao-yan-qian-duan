import React, { Component } from 'react'
import { NavLink as Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { Toast } from 'antd-mobile'
@withRouter
class Login extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.setTitle('请登入')
    }
    userLogin = () => {
        let obj = {
            username: this.refs.username.value,
            password: this.refs.pwd.value,
        }
        axios.post('/node/users/login', obj).then((res) => {
            var status = res.data.err;
            console.log(status)
            if (status === 0) {
                this.loadingToast(`欢迎登入：${res.data.msg.username} 正在进入首页...`)
                localStorage.setItem('userMsg', JSON.stringify(res.data.msg))
                setTimeout(()=>{
                    this.props.history.push('/mine/admin')
                },1200)
            }
            else {
                this.loadingToast('用户名或密码错误！')
                setTimeout(()=>{
                    this.props.history.push('/mine/login')
                },1000)
            }

        }).catch(err=>{
            this.loadingToast('连接错误！')
                setTimeout(()=>{
                    this.props.history.push('/mine/login')
                },1000)
        })
    }
    loadingToast = (msg) => {
        Toast.loading(msg, 1, );
    }
    render() {
        return (

            <div id="content">
                <div className="login_body">
                    <div>
                        <input className="login_text" ref='username' placeholder='请输入用户名' type='text' />
                    </div>
                    <div>
                        <input className="login_text" ref='pwd' placeholder='请输入密码' type="password" />
                    </div>
                    <div className="login_btn">
                        <input type="button" onClick={this.userLogin} value='登入' />
                    </div>
                    <div className="login_link">
                        <Link className='link' to='/mine/register'>立即注册</Link>
                        
                    </div>
                </div>
            </div>

        )
    }
}
export default Login
