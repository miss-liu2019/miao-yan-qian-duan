import React, { Component } from 'react'
import pay from '../../asset/pay.jpg'
export default class index extends Component {
    render() {
        return (
            <div>
                <img src = {pay} alt = '支付' title = '请扫码' />
            </div>
        )
    }
}
