import React from "react"
import "./list.css"
import { getItems } from "../api";
import {withRouter} from "react-router-dom"
@withRouter
class List extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      id:""
    }
  }
 
  componentDidMount() {
    getItems().then(res => {
      console.log(res)
      this.setState({
        data: res.data.data.comingList
      })
    })
  }
  buy(){
    this.props.history.push("/buy")
    console.log(this.props)
  }
  detailed(e){
    this.setState({
      id:e.id
    })
    let path = {
      pathname:"/detailed",
      quert:{id:e.id}
    }
    this.props.history.push(path)
  }
  render() {
    console.log(this.state)
    let { data } = this.state;
    console.log(data)
    return (
      <div className="movie_body">
        <ul>
          {data.map(item => {
            return (
              <li>
                <div className="pic_show">
                  <img src={item.img.replace('w.h','125.111')}/>
                </div>
                <div className="info_list" onClick={this.detailed.bind(this,item)}>
                  <p className = 'item_nm'>{item.nm}</p>
                  <p>
                    <span className="person">{item.wish}</span> 人想看
                  </p>
                  <p>主演: {item.star}</p>
                  <p>{item.rt} 上映</p>
                </div>
                <div className="btn_pre" onClick={this.buy.bind(this)}>预售</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default List


