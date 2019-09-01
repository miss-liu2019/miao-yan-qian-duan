import React from 'react'
import '../Goupiao/goupiao.css'
import { getMovie,getItem } from '../../../../api'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'
import { Item } from 'antd-mobile/lib/tab-bar';
import {withRouter} from 'react-router-dom'

@withRouter
class Xiangqing extends React.Component {
    // state = {
    //     data: ['1', '2', '3'],
    //     imgHeight: 176,
    // }
    constructor() {
        super();
        this.state = {
            data: {},
            id: "",
            photos:[],
            photo:[]
        }
    }
    //组件初始的时候 接收传过来的 id
    // 改变 this.state 的id
    componentDidMount() {
        if(!this.props.location.query){
            this.props.history.push('/movie/hot')
        }else{
            // console.log(this.props)
            const ID = this.props.location.query.id
            console.log(ID)
            this.setState({
                id:ID
            })
            getMovie({ movieId: ID }).then(res => {
            console.log(res)
            this.setState({
                data: res.data.detailMovie,
                photos:res.data.detailMovie.photos
            })
        })
        setTimeout(() => {
            var mySwiper = new Swiper('.swiper-container', {
                
                slidesPerView: 5,
                slidesPerGroup: 3,
            })
        }, 500)

        // 相关电影接口
        getItem().then(res=>{
            // console.log(res)
            this.setState({
                photo:res.data.data.movieList
            })
        })
        }

        

    }
    //点击回退到首页
    huitui() {
        this.props.history.push('/movie/hot')
    }

    // 票房点击事件
    hendt(){
        alert('对不起你点击的功能还未开发，请敬请期待!')
    }

    //点击相关电影图片事件
    getmovie(e){
        // console.log(e)
        this.setState({
            id:e.id
        })
        var path={
            pathname: '/xiangqing',
            query:{id: e.id }
        }
    //    console.log(this.props)
        this.props.history.push(path)
    }


    render() {
        const {data} = this.state
        const photos = this.state.photos
        const photo = this.state.photo
        // console.log(photos)
        // console.log(this.state.data.photos)
        // console.log(this.state.id)
        return (
            <div>
                {/* // 影片简介 */}
                <div className="box">
                    <div className="box1" onClick={this.huitui.bind(this)}>
                        《
                </div>
                    <div className="box_title">
                        <div className="pic1" >
                            <img src={data.img ? data.img.replace('w.h', '128.180') : ""} alt="" />
                        </div>
                        <div className="title_box">
                            <div>{data.nm}</div>
                            <div>{data.enm}</div>
                            <div>
                                <span>{data.wish}人想看</span>
                                <span>({data.snum}万人评)</span>
                            </div>
                            <div> {data.cat}</div>
                            <div>{data.episodeDur}分钟</div>
                            <div>{data.pubDesc}</div>
                        </div>
                    </div>
                </div>

                {/* 影片概况 */}
                <div className="yp_box">
                    <div className="yp_title">
                        点击影院观看
                    </div>
                    <div className="yp_conter">
                        {data.dra}
                    </div>
                </div>

                {/* 演员轮播图 */}
                <div className="photo_box">
                <ul className="moviename-stages">
                        <li className="moviename-vieoImg">
                            <img src={data.videoImg} alt="" />
                        </li>
                        {photos.length === 0 ? photos.map((item, index) => {
                            return (
                                <li className="otherImg" key={index}>
                                    <img src={item.replace('w.h', '128.180')} alt="" />
                                </li>
                            )
                        }) : ''}
                    </ul>
                    <div className="ship">
                        <span>视频</span>
                        <span>{data.vnum}</span>
                        <i>&gt;</i>
                    </div>
                    <div className="juz">
                        <span>剧照</span>
                        <span>{data.pn}</span>
                        <i>&gt;</i>
                    </div>
                </div>

                {/* 媒体库视频播放 */}
                <div className="movie_box">
                    <div className="movie_box1">电影片段</div>
                    <div className="movie_video">
                        <video controls="controls" autoPlay="autoplay" src={data.videourl}></video>
                    </div>
                </div>
                
                {/* 资讯 */}
                <div className="zixun" onClick={this.hendt.bind(this)}>
                        <h3>{data.showst}<h2>昨日票房排行</h2></h3>
                        <h3>{data.watched} <h2>首周票房(万)</h2></h3>
                        <h3>{data.wish}<h2>累计票房(万)</h2></h3>
                        <h4>></h4>
                </div>

                {/* 相关电影 */}
                <div className="photo_box1">
                    <div className="photo_box_title">
                        相关电影
                    </div>
                    <ul className="moviename-stages1">
                        {photo ? photo.map((item, index) => {
                            return (
                                <li className="otherImg1" key={index} onClick={this.getmovie.bind(this,item)}>
                                    <img src={item.img.replace('w.h', '128.180')} alt="" />
                                    <h4>{item.nm}</h4>
                                </li>
                            )
                        }) : ''}
                    </ul>
                </div>

                {/* 底部 */}
                <div className="footer">
                    <div className="footer_title">
                        下载猫眼电影，查看更多电影信息
                    </div>
                    <h3>@&nbsp;猫眼电影&nbsp;客服电话：<span>1010-5335</span></h3>
                    <h3>京ICP备16022489号-1&nbsp;京公网安备11010502030881号</h3>
                    <h3>北京猫眼文化传媒有限公司</h3>
                </div>
            </div>
        )
    }
}
export default Xiangqing

 