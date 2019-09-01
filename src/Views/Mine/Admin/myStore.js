import React, { Component } from 'react'
import './admin.css'
import {Icon} from 'antd-mobile'
export default class myStore extends Component {
    componentDidMount() {
        this.props.setTitle('商城')
        let obj = JSON.parse(localStorage.getItem('userMsg'))
        if (!obj) {
            this.props.history.push('/mine/login')
        }
    }
    returnHandle = () => {
        this.props.history.push('/mine/admin')
    }
    render() {
        return (
            <div className='my-store'>
                <div onClick={this.returnHandle} className='return-box'>
                    <Icon type='left' size='lg' />
                    <span className='return-admin'>返回</span>
                </div>
                <img className='img' src={require('../../../asset/noorders.png')} />
            </div>
        )
    }
}
