import React, { Component } from 'react'
import pay from '../../asset/pay.jpg'
import './pay.css'
import {Icon} from 'antd-mobile'
export default class index extends Component {
    componentDidMount(){
        // console.log(this.props.location.state)
        if(this.props.location.state){
            this.props.location.state('请扫码')
        }
    }
    returnHandle = () => {
        this.props.history.push('/movie/hot')
    }
    render() {
        return (
            <div className = 'pay_code'>
                <div onClick = {this.returnHandle} className = 'return-box'>
                    <Icon type='left' size='lg' />
                    <span className='return-admin'>返回</span>
                </div>
                <img src = {pay} alt = '支付' title = '请扫码' />
            </div>
        )
    }
}