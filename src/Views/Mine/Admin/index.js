import React, { Component } from 'react'
import './admin.css'
import { List, Icon, Button, Toast, Grid } from 'antd-mobile';

const Item = List.Item;
export default class Admin extends Component {
    state = {
        usernMsg: {
            username: 'xiaobao'
        },
        data: [
            {
                icon: require('../../../asset/movie.png'),
                text: '电影',
            }, {
                icon: require('../../../asset/store.png'),
                text: '商城',
            }
        ]
    }
    gridHandle = (val) => {
        // console.log(val)
        if(val.text == '电影'){
            this.props.history.push('/mine/admin/mymovie')
        }else if(val.text == '商城'){
            this.props.history.push('/mine/admin/mystore')
        }
    }
    returnBtn = () => {
        this.loadingToast('退出登录...')
        localStorage.removeItem('userMsg')
        setTimeout(() => {
            this.props.history.push('/mine/login')
        }, 500)
    }
    loadingToast = (msg) => {
        Toast.loading(msg, 1, () => {
            // console.log('return...');
        });
    }
    componentDidMount() {
        let obj = JSON.parse(localStorage.getItem('userMsg'))
        this.props.setTitle(obj.nickname)
        if (!obj) {
            this.props.history.push('/mine/login')
        }else{
            console.log(obj)
            this.setState({
                usernMsg: obj
            })
        }
    }
    toCount = () => {
        this.props.history.push('/mine/admin/count')
    }
    toMovie = () => {
        this.props.history.push('/movie')
    }
    showMsg = () => {
        this.loadingToast('加班中...')
    }
    render() {
        return (
            <div className='admin-content'>
                <div className='img-box'>
                    <img src={require('../../../asset/userImg.png')} />

                </div>
                <div className='my-orders'>
                    <Grid className='user-center' data={this.state.data}
                        columnNum={2}
                        onClick = {this.gridHandle}
                        renderItem={dataItem => (
                            <div   style={{ padding: '12.5px' }}>
                                <img src={dataItem.icon} style={{ width: '45px', height: '45px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                    />
                </div>
                <div>
                    <List className="my-list">
                        <Item onClick={this.toCount} extra={<Icon type='right' />}>账户</Item>
                        <Item onClick={this.toMovie} extra={<Icon type='right' />}>在线观影</Item>
                        <Item onClick={this.showMsg} extra={<Icon type='right' />}>优惠券</Item>
                        <Item onClick={this.showMsg} extra={<Icon type='right' />}>折扣卡</Item>
                    </List>
                </div>
                <Button onClick={this.returnBtn} className='return' type="warning">退出登录</Button>
            </div>
        )
    }
}
