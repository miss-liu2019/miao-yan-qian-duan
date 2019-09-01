import React, { Component,Fragment } from 'react'
import './seach.css'
import { searchList } from '../../../api'
import { withRouter } from 'react-router-dom'

@withRouter
class Seach extends Component {
    constructor() {
        super()
        this.state = {
            msg: "ok",
            status: 222,
            data: [
                {   
                    id:'',
                    nm:'',
                    img:'',
                    sc:'',
                    enm:'',
                    cat:'',
                    rt:''
                }
            ]
        }
    }
    //获取input的value值
    getValue = (e) => {
        searchList(e.target.value).then(res => {
            this.setState({
                status:111
            })
            // const timer = setInterval(()=>{
                if(!res.data || !res.data.movies || !res.data.movies.list){
                    return
                }else{
                    this.setState({
                        data:res.data.movies.list
                    })
                }
            // },1000)
        })
    }
    //点击跳转详情页
    handleClick(e){
        this.setState({
            id:e.id
        })
        let path = {
            pathname:'/goupiao',
            query:{id:e.id}
        }
        this.props.history.push(path)
    }
    
    //点击取消返回首页
    setCancel(){
        this.props.history.push('/movie/hot')
    }
    render() {
        return (
            <div className='body'>
                <div className='search-wrapper'>
                    {/* 搜索框 */}
                    <div className='search-header'>
                        <div className='input-wrapper'>
                            <img className='search-icon' src="http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" />
                            <input className='search-input' onChange={this.getValue} type="text" placeholder='搜电影、搜影院' />
                            {/* <img className='search-icon search-icon-2' src="http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" /> */}
                            
                        </div>
                        {/* <div className='search-search'>搜索</div> */}
                        <div className='cancel' onClick={this.setCancel.bind(this)} >取消</div>
                    </div>
                    {/* 显示样式 */}
                    {this.state.status == 222 ? '':
                    <div className='search-result' >
                        <div className='result-wrapper'>
                            <div className='result'>
                                <h3>电影/电视剧/综艺</h3>
                                <div className='list'>
                                {/* 遍历输出 */}
                                    {this.state.data.map( item => {
                                        return (
                                            // <Fragment>
                                            <div className='movie cell' onClick={this.handleClick.bind(this,item)} >
                                                <img className='poster' src={item.img ? item.img.replace('w.h','64.90') : ''} alt=""/>
                                                <div className='info'>
                                                    <div className='name-score'>
                                                        <p className='name'>
                                                            <span>{item.nm}</span>
                                                        </p>
                                                        <span className='score'>
                                                            <span className='num'>{item.sc}</span>
                                                            分
                                                        </span>
                                                    </div>
                                                    <div className='detail-section'>
                                                        <div className='detail-items'>
                                                            <p className='ename one-line'>{item.enm}</p>
                                                            <p className='catogary'>{item.cat}</p>
                                                            <p className='release'>{item.rt}</p>
                                                        </div>
                                                        <div className='buy-btn sale' data-id='' >购票</div>
                                                    </div>
                                                </div>
                                            </div>
                                            // </Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* <div className="more-result" data-target="movies" data-total="">查看全部{path.length}部影视剧</div> */}
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Seach