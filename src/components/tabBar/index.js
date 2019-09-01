import React, { ReactDOM } from 'react'
import { TabBar } from 'antd-mobile';
import { NotFount } from '../index'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'

import {
  Movie,
  Mine,
  Cinema
} from '../../Views'

import Test from '../Loading'
@withRouter
class tabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'movie',
      hidden: false,
      fullScreen: true,
    };
  }
  componentWillReceiveProps(newProps) {
    // console.log(newProps.location.pathname)
    const path = newProps.location.pathname;
    if (path == '/movie/hot' || path === '/movie/soon' || path === '/movie/city' || path === '/movie/search') {
      this.setState({
        selectedTab: '/movie'
      })
    } else if (path === '/mine/login' || path ==='/mine/admin/mystore' || path ==='/mine/admin/mymovie' || path === '/mine/admin/count' || path === '/mine/admin' || path === '/mine/register') {
      this.setState({
        selectedTab: '/mine'
      })
    } else if(path === '/mine'){
      let userMsg = JSON.parse(localStorage.getItem('userMsg'))
      // console.log(userMsg)
      if (userMsg) {
        this.props.history.push('/mine/admin')
      } else {
        this.props.history.push('/mine/login')
      }
    } else{
      this.setState({
        selectedTab: path
      })
    }

  }
  componentDidMount() {
    // console.log(this.props)

    if (this.props.location.pathname == '/') {
      this.props.history.push('/movie')
      this.setState({
        selectedTab: '/movie'
      })
    } else if (this.props.location.pathname == '/cinema') {
      this.props.history.push('/cinema')
      this.setState({
        selectedTab: '/cinema'
      })
    } else if (this.props.location.pathname == '/mine') {
      this.props.history.push('/mine')
      this.setState({
        selectedTab: '/mine'
      })
    }
  }
  render() {
    return (
      <div className='tab-bar' style={this.state.fullScreen ? { width: '100%', height: '86.6%' } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="电影"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + require('../../asset/images/movie.png') + ') center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + require('../../asset/images/movie_chenked.png') + ') center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === '/movie'}
            onPress={() => {
              this.props.history.push('/movie')
              this.props.setTitle('喵眼电影')
              this.setState({
                selectedTab: '/movie',
              });
            }}
            data-seed="logId"
          >
            {<Route path='/movie' render={props => {
              return <Movie setTitle = {this.props.setTitle} {...props} />
            }} />}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + require('../../asset/images/cinema.png') + ') center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + require('../../asset/images/cinema_checked.png') + ') center center /  21px 21px no-repeat'
              }}
              />
            }
            title="影院"
            key="Koubei"
            selected={this.state.selectedTab === '/cinema'}
            onPress={() => {
              this.props.setTitle('影院')
              this.props.history.push('/cinema')
              this.setState({
                selectedTab: '/cinema',
              });
            }}
            data-seed="logId1"
          >
            {<Route path='/cinema' render={props => {
              return <Cinema setTitle = {this.props.setTitle} {...props} />
            }} />}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require('../../asset/images/mine.png') }}
            selectedIcon={{ uri: require('../../asset/images/mine_checked.png') }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === '/mine'}
            onPress={() => {
              // console.log(this.props)
              this.props.setTitle('个人中心')
              this.props.history.push('/mine')
              this.setState({
                selectedTab: '/mine',
              });
            }}
          >
            {<Route path='/mine' render={props => {
              return <Mine setTitle = {this.props.setTitle} {...props} />
            }} />}
          </TabBar.Item>




        </TabBar>
      </div>
    );
  }
}

export default tabBar
