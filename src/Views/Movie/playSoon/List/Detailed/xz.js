import React from "react"
import {withRouter} from "react-router-dom"
@withRouter
class Xz extends React.Component{
    main(){
        console.log(111)
        this.props.history.push("/movie/soon")
    }
    render(){
        return(
            <div>
                <h1 style={{color :'red'}}>请复制下段链接进行下载。。。。。。</h1>
                <span>http://m.maoyan.com/app?
                    _v_=yes&f=&to=meituanmovie%3A%2F%2Fwww.meituan.com
                    %2Fmovie%3Fid%3D1138648
                    %26nm%3D%25E8%2580%2581%25E5
                    %25B8%2588%25E4%25BD%25A0%25E4
                    %25BC%259A%25E4%25B8%258D
                    %25E4%25BC%259A%25E5%259B
                    %259E%25E6%259D%25A5
                    &pageId=100383&actionId=moviedetaildownload</span>
                <p>不想复制 请返回</p>

                <p onClick={this.main.bind(this)} style={{color:"red"}}>返回</p>
            </div>
        )
    }
}
export default Xz