import React, { Component, Fragment } from 'react'
import './mine.css'
import Login from './Login'
import Admin from './Admin'
import Register from './Register'
import Count from './Admin/counntChange'
import MyMovie from './Admin/myMovie'
import MyStore from './Admin/myStore'
import { Switch, NavLink as Link, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
export default class Mine extends Component {
    componentWillReceiveProps(newProps) {
    
    }

    componentDidMount() {//getUser
        // console.log(this.props)
         const userMsg = JSON.parse(localStorage.getItem('userMsg'))
         console.log(userMsg)
         if (userMsg) {
             this.props.history.push('/mine/admin')
         } else {
             this.props.history.push('/mine/login')
         }
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                {/* <Login /> */}
                {/* <Link to='/mine/login'>8888</Link> */}
                <Switch>
                    <Route path='/mine/login' children = {props=>{
                        return <Login {...props} setTitle = {this.props.setTitle} />
                    }} />
                    <Route path='/mine/register' children = {props=>{
                        return <Register {...props} setTitle = {this.props.setTitle} />
                    }}  />
                    <Route path='/mine/admin' exact children = {props=>{
                        return <Admin {...props} setTitle = {this.props.setTitle} />
                    }}  />
                    <Route path='/mine/admin/count' children = {props=>{
                        return <Count {...props} setTitle = {this.props.setTitle} />
                    }}  />
                    <Route path='/mine/admin/mymovie' children = {props=>{
                        return <MyMovie {...props} setTitle = {this.props.setTitle} />
                    }}  />
                    <Route path='/mine/admin/mystore' children = {props=>{
                        return <MyStore {...props} setTitle = {this.props.setTitle} />
                    }}  />
                    {/* <Redirect form='/mine' to='/mine/login' /> */}
                </Switch>
            </Fragment>
        )
    }
}