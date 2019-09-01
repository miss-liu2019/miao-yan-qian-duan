// 基于react + redux + react-router + antdUI + Node.js + Express 的电影购票项目
import React from 'react';
import './App.css';
import { TabBar, HeadBar, NavBar, NotFount } from './components'
import { withRouter, Route, Redirect, Switch } from 'react-router-dom'

import cinDetail from './Views/Cinema/cinDetail';
import Buy from "./Views/Movie/playSoon/List/Buy/Buy"
import Detailed from "./Views/Movie/playSoon/List/Detailed/Detailed"
import Xq from "./Views/Movie/playSoon/List/Detailed/xq"
import Xz from "./Views/Movie/playSoon/List/Detailed/xz"
import Juzhao from "./Views/Movie/playSoon/List/Detailed/juzhao"
import Goupiao from './Views/Movie/playing/Goupiao/goupiao'
import Playing from './Views/Movie/playing'
// import Xiangqing from './Views/Movie/playing/Goupiao/Xiangqing/xiangqing'
import Xiangqing from './Views/Movie/playing/Xiangqing/xiangqing'
import Xiangguan from './Views/Movie/playing/xiangguan/xiangguan'
import { connect } from 'react-redux'
import { getLocation } from './store/Action/location'
import { getCity } from './store/Action/getcity'
import Pay from './components/Pay'
@withRouter
class App extends React.Component {
  state = {
    title: '喵眼电影'
  }
  componentDidMount() {
    this.props.getLocation()
    this.props.getCity()
  }
  setTitle = (title) => {
    this.setState({
      title: title
    })
  }
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <NavBar title={this.state.title} />
        {/* <TabBar setTitle={this.setTitle} /> */}
        <Switch>
          <Route path='/juzhao' component={Juzhao} />
          <Route path='/xz' component={Xz} />
          <Route path='/xq' component={Xq} />
          <Route path='/buy' component={Buy} />
          <Route path='/detailed' component={Detailed} />
          <Route path='/cinDetail' component={cinDetail} />
          <Route path="/goupiao" component={Goupiao} />
          <Route path="/playing" component={Playing} />
          <Route path="/xiangqing" component={Xiangqing} />
          <Route path="/xiangguan" component={Xiangguan} />
          <Route path='/pay' children={props => {
            return <Pay {...props} />
          }} />
          <Route path='/' children={props => {
            return <TabBar {...props} setTitle={this.setTitle} />
          }} />
          <Route path='/404' component={NotFount} />
          <Redirect form='/' to='/movie' />
          <Redirect to='/404' />
        </Switch>
      </div>
    )
  }
}
const getState = state => {
  // console.log(state)
  return {
    locationMsg: state.Location,
    citylist: state.cityList
  }
}


export default connect(getState, { getLocation, getCity })(App);
