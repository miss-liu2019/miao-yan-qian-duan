import React from "react"
import Slideshow from "./slid/Slideshow"
import {withRouter} from "react-router-dom"
import "./detailed.css"
import { getItemss,getItems } from "../../api";
import Carousel from "../../Carousel/index"
@withRouter
class Detailed extends React.Component{
    constructor(){
        super()
        this.state = {
            data : {},
            id:"",
            juzaoArr : []
        }
    }
    componentDidMount(){
        if(!this.props.location.quert){
            this.props.history.push('/movie/hot')
        }else{
            let ID = this.props.location.quert.id
            this.setState({
                id:ID
            })
            getItemss({movieId :ID }).then(res => {
                // console.log(res)
                // console.log(res.data.detailMovie)
                this.setState({
                    data:res.data.detailMovie
                })
            })
        }

    }
    main(){
        this.props.history.push("/movie/soon")
    }
    getJuzao = (val) =>{
        this.setState({
            juzaoArr:val
        },()=>{
            // console.log(this.state.juzaoArr)
        })
    }
    tehui(){
    }
    ts(){
        this.props.history.push("/xq")
    }
    xz(){
        this.props.history.push("/xz")
    }
    juzhao(){
        let arr = this.state.juzaoArr
        this.props.history.push({
            pathname:"/juzhao",
            state:arr
        })
    }
    delayLoad = () => {
        if(this.props.location.quert){

            let ID = this.props.location.quert.id
            return <Slideshow juzao = {this.getJuzao} id = {ID} />
        }else{
            this.props.history.push("/movie/hot")
        }
    }
    render(){
        let  data  = this.state.data
        // console.log(data)
        return(
            <div id="container">
                <div id="top_1">
                    <h2 className="h2" onClick={this.main.bind(this)}>⬅</h2>
                    <div className="conter">
                    <div className="left">
                        <img src={data.img ? data.img.replace('w.h','111.222') : ""} alt=""/>
                        {/* < img src={this.state.data.img ? this.state.data.img.replace('w.h', '128.180') : ""} alt=""/> */}
                    </div>
                    <div className="right">
                        <h1 className="p0">{data.nm}</h1>
                        <p className="p1">{data.enm}</p>
                        <h1 className="p5">{data.bingeWatch}想看</h1>
                        <p className="p4">类型:</p>
                        <p className="p2">{data.cat}</p>
                        <span className="s1">{data.fra}/{data.episodeDur}分钟</span>
                        {/* <span className="s2">103分钟</span> */}
                        <p className="p3">{data.pubDesc}</p>
                    </div>
                    </div>
                </div>
                <div id="brief">
                <div onClick={this.tehui.bind(this)} className="th">特惠购票</div>
                <div className="dra">{data.dra}</div>
                </div>
                <div id="slideshow">
                    <h1 className="h1">剧照</h1>
                    {/* <Slideshow juzao = {this.getJuzao} id = {this.state.id} /> */}
                    {this.delayLoad()}
                    <div className="zuoyou">
                        <span className="s2">视频 </span>
                        <span className="s3" onClick={this.juzhao.bind(this)}>剧照 </span>
                    </div>
                </div>
                <div id="tishi">
                    <div className="ts">
                        <h1 className="t-h1">提示</h1>
                        <h2 className="t-h2">本片在香港被评为[A]级,未满十八岁的请不要观看</h2>
                        <h3 className="t-h3" onClick={this.ts.bind(this)}>详情</h3>
                    </div>
                </div>
                <div>
                <Carousel/>
                </div>
                <div id="bottom">
                    <h1 className="b-h1" onClick={this.xz.bind(this)}>下载猫眼电影,查看更多电影信息</h1>
                    <div className="b-d">
                        <span>猫眼电影 客服电话 </span>
                        <a href="">1010-5335</a>
                    </div>
                    <p className="b-p">
                        <span>京ICP备16022489号-1 </span>
                        <span>京公网安备11010502030881号</span>
                    </p>
                    <p className="b-p2">
                        北京猫眼文化传媒有限公司
                    </p>
                </div>
            </div>
        )
    }
}
export default Detailed

