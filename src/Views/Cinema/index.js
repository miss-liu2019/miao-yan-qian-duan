import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CinemaBox from './cinema'
import './Cinema.css'


class Cinema extends Component {
    render(){
        console.log(this.props)
        return (
        <div>
            
            <CinemaBox setTitle = {this.props.setTitle} />
            {/* <Route path="/cinema" component={Cinema} /> */}
            {/* <Route path="/cinDetail" component={CinDetail} />  */}
        </div>                
        )
    }
   
}
export default Cinema