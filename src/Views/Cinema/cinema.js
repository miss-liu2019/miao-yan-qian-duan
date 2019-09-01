import React, { Component } from 'react'
import './Cinema.css'
import { connect } from 'react-redux'
import MovieTheatre from './cinemaList'
import { withRouter, NavLink as Link } from 'react-router-dom'
import { getCity } from '../../store/Action/getcity'
import CinemaList from './cinemaList'
import { SearchBar } from 'antd-mobile'
import SearchList from './SearchMovie'
import cinemaList from './cinemaList';


@withRouter
class Cinema extends Component {
    state = {
        isShowSearchBar: false,
        value:''
    }
    componentDidMount() {
        console.log(this.props)
    }
    focusHandle = () => {
        this.setState({
            isShowSearchBar:true
        })
    }
    blurHandle = () => {
        this.setState({
            isShowSearchBar:false
        })
    }
    getValue = (val) => {
        // console.log(e)
        this.setState({
            value:val
        })
    }
    render() {
        return (
            <div>
                <div id="main">
                    {/* <Header title="喵眼影院" /> */}
                    <div id="content">
                        <div className="nav">
                            <div className="city">
                                <Link to='/movie/city' onClick={this.clickHandle} className='city_item'>
                                    {this.props.locationMsg.nm}
                                </Link>
                                <img className='city-icon' src={require('../../asset/location.png')} />
                            </div>
                            <SearchBar
                                onFocus={this.focusHandle}
                                onBlur={this.blurHandle}
                                className='search'
                                onChange = {this.getValue}
                                value = {this.state.value}
                                cancelText = '取消'
                                placeholder="搜电影"
                                maxLength={8} />
                            {/* 搜索栏 */}

                        </div>
                        {this.state.isShowSearchBar ?
                            <SearchList val = {this.state.value} /> :
                            <CinemaList setTitle={this.props.setTitle} />
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}
const getState = state => {
    console.log(state)
    return {
        isLocation: state.isLocation,
        locationMsg: state.Location
    }
}

export default connect(getState, { getCity })(Cinema)
