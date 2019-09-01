import React, { Component, Fragment } from 'react'
import { Icon } from 'antd-mobile'
import City from './City/index'
import Playing from './playing'
import PlaySoon from './playSoon'
import Search from './search'
import './playSoon.css'
import axios from 'axios'
import Swiper from './Swiper'
import { NavLink as Link, Switch, Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import playing from './playing';
class index extends Component {
    state = {
        isActive : false
    }
    componentDidMount() {
        
    }
    clickHandle = () => {
        this.setState({
            isActive:!this.state.isActive
        })
    }
    render() {
        return (
            <Fragment>
                <Swiper/>
                <div id='content'>
                    <div className="movie_menu">
                        <div className="city_name">
                            <Link to='/movie/city' onClick = {this.clickHandle} className = 'city'>{this.props.locationMsg.nm}</Link>
                            <img className = 'city-icon' src = {require('../../asset/location.png')}/>
                        </div>
                        <div className="hot_swtich">
                            {/* <div className="hot_item">正在热映</div>
                            <div className="hot_item active">即将上映</div> */}
                            <Link to='/movie/hot' className="hot_item">正在热映</Link><apan>|</apan>
                            <Link to='/movie/soon' className="hot_item">即将上映</Link>
                        </div>
                        <div className="search_entry">
                            <Link to='/movie/search'><img className = 'search_img' src = {require('../../asset/search_action.png')} /></Link>
                        </div>
                    </div>
                </div>
                {/* console.log(this.props.setTitle) */}
                <Switch>
                    <Route path='/movie/city' children = {props => {
                        return <City {...props} setTitle = {this.props.setTitle} />
                    }} />
                    <Route path='/movie/hot' children = {props => {
                        return <Playing {...props} setTitle = {this.props.setTitle} />
                    }}  />
                    <Route path='/movie/soon' children = {props => {
                        return <PlaySoon {...props} setTitle = {this.props.setTitle} />
                    }}  />
                    <Route path='/movie/search' children = {props => {
                        return <Search {...props} setTitle = {this.props.setTitle} />
                    }}  />
                    <Redirect from='/movie' to='/movie/hot' />
                </Switch>
            </Fragment>
        )
    }
}
const getState = state =>{
    return {
        locationMsg:state.Location,
    }
}
export default connect(getState)(index)
