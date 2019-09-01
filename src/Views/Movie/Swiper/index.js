import React, { Component, Fragment } from 'react'
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newlist: []
        }
    }
    componentDidMount() {
        axios({
            url: "https://m.maizuo.com/gateway?type=2&cityId=110100&k=6711783",
            method: "get",
            headers: {
                "X-Client-Info":
                    '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563888146987842478543"}',
                "X-Host": "mall.cfg.common-banner"
            }
        }).then(res => {
            // console.log(res.data.data);
            // this.state.newlist = res.data.data;
            this.setState({
                newlist: res.data.data
            })
            // console.log(this.datalist)
            setTimeout(() => {
                let swiper = new Swiper(".swiper-container", {
                    loop: true, // 循环模式选项
                    autoplay: {
                        delay: 1500,
                        stopOnLastSlide: true,
                        disableOnInteraction: true
                    },
                    effect: "fade"
                });
            })
        }, 200);
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">

                    {this.state.newlist.map((item,index) => {
                        return (
                            <div key = {index} className="swiper-slide">
                                <img className="swiperimg" src={item.imgUrl} />
                            </div>
                        )
                    })}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}