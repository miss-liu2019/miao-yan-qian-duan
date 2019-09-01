import React, { Component } from 'react'
import './admin.css'
import axios from 'axios'
import { Icon, Button, Toast, Grid, List, InputItem, Card } from 'antd-mobile';
import { createForm } from 'rc-form';
class CounntChange extends Component {
    state = {
        userMsg: {  //初始化
            nickname: '千锋彭于晏',
            _id: '5d67bc7452536a2388bb20e8',
            username: '1234',
            password: '1234',
        },
        username: '',
        pwd: '',
        nickname: '',
        isShowError: true,
        pwdError:false
    }
    componentDidMount() {
        this.props.setTitle('账户更改')
        let obj = JSON.parse(localStorage.getItem('userMsg'))
        if (!obj) {
            this.props.history.push('/mine/login')
        } else {
            axios.post('/node/users/getUserMsg', obj).then(res => {
                console.log(res.data.msg)
                this.setState({
                    userMsg: res.data.msg[0]
                })
            })
        }

    }
    submitMsg = () => {
        let username = this.props.form.getFieldValue('username')
        let newPwd = this.props.form.getFieldValue('newPwd')
        let newPwd2 = this.props.form.getFieldValue('newPwd2')
        let nickname = this.props.form.getFieldValue('nickname')
        console.log(newPwd)
        console.log(newPwd2)
        if(username === undefined || newPwd === undefined || nickname === undefined) {
            this.loadingToast('输入信息不能为空！')
            setTimeout(() => {
                this.props.history.push('/mine/admin/count')
            }, 1000)
        }else{
            let obj = {
                username: username,
                password: newPwd,
                nickname: nickname,
            }
            console.log(obj)///updateUserInfo
            axios.post('/node/users/updateUserInfo', obj).then(res=>{
                console.log(res)
                if(res.data.err === 0){
                    this.loadingToast('修改成功！')
                    localStorage.removeItem('userMsg')
                    setTimeout(()=>{
                        this.props.history.push('/mine/login')
                    },1000)
                }else{
                    this.loadingToast('更新失败！')
                }
            })
        }

    }
    toUserCenter = () => {
        this.props.history.push('/mine/admin')
    }
    pwdBtn = (val) => {
        let obj = JSON.parse(localStorage.getItem('userMsg'))
        let userMsg = {
            username: obj.username,
            password: val
        }
        axios.post('/node/users/login', userMsg).then((res) => {
            var status = res.data.err;
            console.log(status)
            if (status === 0) {
                this.loadingToast('密码验证成功！')
                this.setState({
                    isShowError: false
                })
            }
            else {
                this.setState({
                    isShowError: true
                })
                this.loadingToast('旧密码错误！')
            }

        }).catch(err => {
            this.loadingToast('连接错误！')
        })
    }
    loadingToast = (msg) => {
        Toast.loading(msg, 1);
    }
    surePwd = () => {
        let newPwd = this.props.form.getFieldValue('newPwd')
        let newPwd2 = this.props.form.getFieldValue('newPwd2')
        if(newPwd !== newPwd2){
            this.loadingToast('两次输入不一致！')
            this.setState({
                pwdError:true
            })
        }else if(newPwd == newPwd2){
            this.setState({
                pwdError:false
            })
        }
    }
    render() {
        const { getFieldProps } = this.props.form;
        // console.log(getFieldProps())
        return (
            <div className='admin-content'>

                <div className='img-box'>
                    <img src={require('../../../asset/userImg.png')} />

                </div>
                <Card>
                    <Card.Header
                        title="账户信息"
                        thumb={<img width='20' src={require('../../../asset/countIcon.png')} />}
                    />
                    <Card.Body>
                        <List ref='newMsg'>
                            <InputItem
                                {...getFieldProps('username')}
                                placeholder={this.state.userMsg.username}
                            >
                                <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                            </InputItem>
                            <InputItem
                            type = 'password'
                                onBlur={this.pwdBtn}
                                error={this.state.isShowError ? '旧密码错误' : false}
                                {...getFieldProps('pwd')}
                                placeholder="旧密码"
                            >
                                <div style={{backgroundImage: 'url(' + require('../../../asset/password.png') + ')', backgroundSize: 'cover',marginLeft:'2px' , height: '18px', width: '18px' }} />
                            </InputItem>
                            <InputItem
                            type = 'password'
                                {...getFieldProps('newPwd')}
                                placeholder="新密码"
                            >
                                <div style={{ backgroundImage: 'url(' + require('../../../asset/newpwd.png') + ')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                            </InputItem>
                            <InputItem
                            type = 'password'
                            onBlur={this.surePwd}
                            error = {this.state.pwdError}
                                {...getFieldProps('newPwd2')}
                                placeholder="确认密码"
                            >
                                <div style={{ backgroundImage: 'url(' + require('../../../asset/newpwd2.png') + ')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                            </InputItem>
                            <InputItem
                                {...getFieldProps('nickname')}
                                placeholder={this.state.userMsg.nickname}
                            >
                                <div style={{ backgroundImage: 'url(' + require('../../../asset/nickname.png') + ')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                            </InputItem>
                        </List>
                    </Card.Body>
                </Card>
                <div className='btnlist'>
                    <Button onClick={this.submitMsg} size='default' className='submit' type="primary">提交</Button>
                    <Button onClick={this.toUserCenter} size='default' className='returnCenter' type="warning">返回</Button>
                </div>

            </div>
        )
    }
}
export default createForm()(CounntChange)
