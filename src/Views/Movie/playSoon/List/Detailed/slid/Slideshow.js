import React from 'react'
import "./Slideshow.css"
import { Carousel, WingBlank } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {getItemss} from '../../../api/index'

@withRouter
class Swiper extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 80,
    data1:''
  }
  componentDidMount() {
    console.log(this.props)
    // const arr = []
    getItemss({movieId:this.props.id}).then(res => {
      // console.log(res)
      console.log(res.data.detailMovie.photos)
      const arr = this.filter(res.data.detailMovie.photos)
      this.props.juzao(arr)
      console.log(arr)
      // this.setState({
      //     data1:res.data.detailMovie
      // },()=>{
        // setTimeout(() => {
          this.setState({
            data: arr,
          });
        // }, 100);
      // })
  })
    console.log(this.props)

    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     // data: arr,
    //   });
    // }, 100);
  }
  filter = (arr) => { //replace('w.h','111.222')
  let newArr = []
    for(let i = 0 ; i < arr.length ; i ++){
      newArr.push(arr[i].replace('w.h','120.250'))
    }
  return newArr
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          slideWidth='80px'
          cellSpacing={15}
          infinite
          dots = {false}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              // href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '80px', height:'80px'}}
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

export default Swiper