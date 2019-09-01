import React, { Component } from 'react'
import { NavLink as Link, Switch, Route ,Redirect} from 'react-router-dom'
import "./playing.css"
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {getItem} from "../../../api"  //引入 api 接口
import {withRouter} from 'react-router-dom'

@withRouter
 class Playing extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            id:'',
        }
    }

    handle(e){
        let setTitle = this.props.setTitle
        this.setState({
            id:e.id
        })
        var path = {
            pathname: '/goupiao',
            query:{id: e.id,setTitle }
        }
        console.log(this.props.history)
        // console.log(this.state.id)
        this.props.history.push(path)
        // console.log(this.state.id)
        
    }
    componentDidMount(){
        // 调用api的数据 改变state
        getItem().then(res=>{
            // console.log(res.data.data)
            this.setState({
                data:res.data.data.movieList
            })
        })
    }
    render() {
        // console.log(this.state.id)
        // console.log(this.state.data.data)
        return (
            <div>
                <ul className="hotMovie-ul">
                    {this.state.data.map(item => (
                        <li onClick={this.handle.bind(this, item)} key={item.id} className="hot-li">
                            <img className='pic' onClick={this.handle.bind(this)} src={item.img.replace('w.h', '128.180')} alt="" />
                            <div className='right'>
                                <span>{item.nm}</span>
                                <span>观众评：</span>
                                <span>{item.sc}</span>
                                {/* <span>观众评{item.wish}</span> */}
                                <span>{item.star}</span>
                                <span>{item.showInfo}</span>
                                <div className='shop'>购票</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )

    }
}
export default Playing