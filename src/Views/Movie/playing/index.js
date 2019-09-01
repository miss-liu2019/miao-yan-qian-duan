import React, { Component } from 'react'
import {Route} from "react-router-dom"
import Playing from './playing'
import Goupiao from './Goupiao/goupiao'
import { Toast } from 'antd-mobile'
import {connect} from 'react-redux'
import {changeLocstionState} from '../../../store/Action/location'

class index extends Component {
    state = {
        isLocation:true
    }
    loadingToast = (msg) => {
        Toast.loading(msg, 1.5);
    }
    componentDidMount(){
        console.log(this.props)
        this.props.setTitle('喵眼电影')
        if(this.props.isLocation.isLocaiton){
            this.loadingToast('正在定位...')
            this.props.changeLocstionState()   
        }
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                <Playing setTitle = {this.props.setTitle}/>
                {/* <Goupiao/> */}
                {/* <React path="/guopiao" component={Goupiao}/> */}
            </div>
        )
    }
}
const getState = state => {
    return {
        isLocation:state.isLocation,
    }
}
export default connect(getState,{changeLocstionState})(index)