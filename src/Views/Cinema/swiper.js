import React from 'react'
import {getCinemaDail} from '../../api'
import { Carousel, WingBlank } from 'antd-mobile';

class App extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 50,
  }
  
  componentDidMount() {
    // simulate img loading
    // console.log(this.props) // {id: 1182}
    getCinemaDail(this.props.id).then(res=>{
        // console.log(res.data.showData.movies)
        const arr = this.getImgList(res.data.showData.movies)
        // console.log(arr)
        setTimeout(() => {
            this.setState({
              data: arr,
            });
          }, 100);
    })

  }
  getImgList = (arr) => {
    let newArr = []
    for(let i = 0 ; i < arr.length ; i++){
        newArr.push(arr[i].img.replace('w.h','50.100'))
    }
    return newArr
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite = 'true' // 是否循环播放
          dots = {false} // 是否显示面板指示点
          slideWidth = '80px' // 图片宽度
          cellSpacing = {8} // 图片之间的间距，以px为单位
          frameOverflow ="hidden" // 设置 slider frame 的 overflow 样式,默认值hidden
          autoplayInterval = {3000}	// 自动切换的时间间隔
          selectedIndex = {0} // 设置当前显示的索引
          autoplay = 'true' // 是否自动切换
          swipeSpeed = {12} // 滑动灵敏度
        //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        //   afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default App
