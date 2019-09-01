import React, { Component } from 'react'

import Carousel from "./Carousel/index"
import List from "./List/index"

import './playSoon.css'
export default class index extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <List/>
            </div>
        )
    }
}
