import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
export default class Loading extends Component {
    loadingToast = (msg) => {
        Toast.loading(msg, 0.6);
    }
    componentDidMount(){
        this.loadingToast('拼命加载中...')
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
