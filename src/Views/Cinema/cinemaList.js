import React, { Component, Fragment } from 'react'
import './Cinema.css'

import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getItem1 } from '../../api/index'

@withRouter
class CinemaList extends Component {
    // 初始化数据
    state = {
        data: [
            {
                addr: "秦淮区洪武路88号新街口万达广场4层（近淮海路）",
                distance: "900km",
                id: 1182,
                mark: 0,
                nm: "万达影城（新街口店）",
                promotion: { cardPromotionTag: "开卡特惠，首单1张最高立减5元" },
                sellPrice: "14.9",
                tag: {
                    hallType: [
                        "杜比全景声厅",
                        "Dolby Cinema厅",
                        "4DX厅",
                    ],
                    hallTypeVOList: [],
                    vipTag: "折扣卡"
                }
            }
        ]
    }
    goDetail(item) {
        let setTitle = this.props.setTitle  // 转换影院标题
        this.props.history.push({ pathname: "/cinDetail", state: { ...item, setTitle } })
    }
    componentDidMount() {
        if(!this.props.setTitle){
            this.props.history.push('/movie/hot')
        }else{

            // console.log(this.props)
            this.props.setTitle('影院')
            getItem1(this.props.locationMsg.id).then(res => { // 55是南京的id，this.props.locationMsg.id城市的id.
                // console.log(res.data)
                this.setState({
                    data: res.data.data.cinemas
                }, () => {
                    // console.log(this.state.data)
                })
    
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="cinema_menu">
                    <div className="city_switch">
                        <i>全城</i>
                    </div>
                    <div className="brand_swtich">
                        <i>品牌</i>
                    </div>
                    <div className="feature_switch">
                        <i>特色</i>
                    </div>
                </div>
                {/* <CiList> */}

                {this.state.data.map(item => { // 遍历数组item

                    return (
                        <div key={item.id} className="cityList" onClick={this.goDetail.bind(this, item)}>
                            <div className="list_title1">
                                <span className="name">{item.nm}</span>
                                <span className="price">{item.sellPrice}<span className="small">元起</span></span>
                            </div>
                            <div className="dz">
                                <span>{item.addr}</span>
                            </div>
                            <div className="label-block">
                                {item.tag.hallTypeVOList.map(item => {
                                    return <span className="snack" key={item.name}>{item.name}</span>
                                })}
                                <span className="snack-vip">改签</span>
                                <span className="snack-vip">折扣卡</span>
                            </div>
                            <div className="wb">
                                <span>{item.promotion.cardPromotionTag}</span>
                            </div>
                        </div>
                    )
                })}
            </Fragment>

        )
    }
}
// 这步操作是获取地理位置，在哪里就可以获取当前的地理位置
const getState = state => {
    // console.log(state)
    return {
        locationMsg: state.Location
    }
}

export default connect(getState)(CinemaList)