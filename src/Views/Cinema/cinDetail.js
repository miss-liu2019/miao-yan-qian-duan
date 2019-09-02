import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom'
import "./cinDetail.css"  // 电影详情页的样式
import Swiper from './swiper'// 轮播图插件
import { connect } from 'react-redux'
import { getCinemaDail } from '../../api/index';
import {Icon} from 'antd-mobile'
@withRouter
class CinDetail extends Component {
    // 初始化数据
    state = {
        cinemaData: [{

            nm: "万达影城（新街口店）",
            addr: "秦淮区洪武路88号新街口万达广场4层（近淮海路）",
        }],
        moviesList: [{
            desc: "134分钟 | 动作 | 道恩·强森,杰森·斯坦森",
            dur: 134,  // 影片时长
            nm: "速度与激情：特别行动",
            sc: "8.6",   // 评分
        }],
        moviesShows: [{
            dateShow: "今天8月30日",
        }],
        moviesPlist: [{
            dt: "2019-08-30",
            lang: "英语",
            extraDesc: "折扣卡首单特惠",
            th: "7号4DX厅（儿童须购票）",
            tm: "09:35",
            tp: "2D",
            vipPrice: "20.9",
            vipPriceName: "折扣卡",
            vipPriceNameNew: "折扣卡首单"
        }],
        vipInfo:[{
            process: "29.9元起开卡",
            tag: "折扣",
            kaika: "现在开卡，首单1张最高立减5元"
        }],
        imgList:[],
        
    }
    // 按钮返回登录页
    handle() {
        this.props.history.push("/mine")       
    }
    // 返回按钮
    returnHdle(){
        this.props.history.push("/cinema")
    }
    componentDidMount() {
        // console.log(this.props.location.state.setTitle)
        // console.log(this.props.location,2333333)
        if (!this.props.location.state) {
            this.props.history.push('/movie')
            // console.log(this.props.location.state.id)
        } else {
            // 调用api的数据，改变state
            getCinemaDail(this.props.location.state.id).then(res => {
                // console.log(res.data.cinemaData.nm)
                this.props.location.state.setTitle(res.data.cinemaData.nm)
                // let sanchangt = this.toHourMinute(this.state.moviesList.dur)
                this.setState({
                    // 存储状态值
                    cinemaData:res.data.cinemaData,
                    moviesList:res.data.showData.movies[0],
                    moviesShows:res.data.showData.movies[0].shows[0],
                    moviesPlist:res.data.showData.movies[0].shows[0].plist,
                    vipInfo:res.data.showData.vipInfo[0],
                    imgList:res.data.showData.movies
                })
            })
        }
        

    }
    // 将分钟数量转换为小时和分钟字符串
    // toHourMinute = (time,dur) => {
    //     let during = (Math.floor(dur/60) + ":" + (dur%60) );
    //     let time2 = during + time ;
    //     return time2;
    // }
    getSwiper = () => {
        if(this.props.location.state){
            let ID = this.props.location.state.id
            return <Swiper id = {ID} />
        }else{
            this.props.history.push('/cinema')
        }
    }
    render() {
        return (
            <div className="cinContainer">
                <div className="body">
                    <div className="cinema-block">
                        {/* 返回按钮 */}
                        <div className='my-store'>
                            <div onClick={this.returnHandle} className='return-box'>
                                <Icon type='left' size='lg' onClick={this.returnHdle.bind(this)} />
                                <span className='return-admin' onClick={this.returnHdle.bind(this)}>返回</span>
                            </div>
                        </div>
                        {/* 影院名称和地址 */}
                        <div className="cinema-info">
                            <div className="title">{this.state.cinemaData.nm}</div>
                            <div className="location">{this.state.cinemaData.addr}</div>                       
                        </div>
                    </div>
                    {/* 轮播图插件*/}
                    <div className="dail-banner" onClick={this.handle.bind(this)}>
                        {this.getSwiper()}
                    </div>

                    <div class="movie_title">
                        <div><span className="aa_span1">{this.state.moviesList.nm}</span>
                            <span className="aa_span2">{this.state.moviesList.sc}分</span>
                            <div className="movie-desc">{this.state.moviesList.desc}</div>
                        </div>
                    </div>
                    {/* 影片日期 */}
                    <div className="rq">
                        <div className="today">
                            <i>{this.state.moviesShows.dateShow}</i>
                        </div>
                    </div>

                    <div className="jingxi" onClick={this.handle.bind(this)}>
                         <span className="tag">{this.state.vipInfo.tag}</span>
                         <span className="kaika">{this.state.vipInfo.title}</span> 
                         <span className="process">{this.state.vipInfo.process}</span>    
                    </div>
                   
                     {this.state.moviesPlist.map(item=>{
                        return (
                    <div key = {item.id} className="movieList" onClick={this.handle.bind(this)}>
                        <div className="a1">
                            <span className="tm">{item.tm}</span>
                            <span className="lang">{item.lang}</span>
                            <span className="tp">{item.tp}</span>
                            <span className="vipPrice">￥{item.vipPrice}</span>
                            <p className="vipPriceName"><span className='zhekouka'>{item.vipPriceName}</span><span className='no-monney'>8.5折</span></p>
                        </div>
                        <div className="a2">
                           
                            <span className="sc">{}散场</span>
                           
                            {/* <span className="sc">{item.tm-"120"}</span> */}
                            <span className="th">{item.th}</span>
                            <span className="vipPriceNameNew">{item.extraDesc}</span>
                        </div>
                        <button className="gp" onClick={this.handle.bind(this)}>购票</button>
                    </div>                  
                      )
                    })} 
                </div>
            </div>
        )
    }
}
    // 这步操作是获取当前地理位置，主机在哪里就可以获取当前的地理位置
    const getState = state => {
        return {
            locationMsg: state.Location
        }
    }


    export default connect(getState)(CinDetail)