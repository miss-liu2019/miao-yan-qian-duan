import React, { Component } from 'react'
import { searchCinemaList } from '../../api'
import './Cinema.css'
export default class SearchMovie extends Component {
    state = {
        data: [
            {
                nm: '',
                sellPrice: '',
                addr: '',
                tag: {
                    hallTypeVOList: []
                },
                promotion: {
                    cardPromotionTag: ''
                }



            }
        ]
    }
    componentWillReceiveProps(newProps) {

        console.log(newProps.val)
        searchCinemaList(newProps.val).then(res => {
            console.log(res.data)
            let arr = Object.keys(res.data)
            if(!arr.length) {
            } else {
                this.setState({
                    data: res.data.cinemas.list
                })

            }
        })

    }
    componentDidMount() {

    }
    goDetail(item) {
        let setTitle = this.props.setTitle  // 转换影院标题
        this.props.history.push({ pathname: "/cinDetail", state: { ...item, setTitle } })
    }
    render() {
        return (
            <div>
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
                        </div>
                    )
                })}
            </div>
        )
    }
}
