// 在redux中添加了定位当前城市及获取城市列表
import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './index.css'
export default class navBar extends Component {
    render() {
      // console.log(this.props)
        return (
            <div>
              <NavBar
                mode="dark"
                className = 'head'
              >{this.props.title}</NavBar>
            </div>
          )
    }
}

