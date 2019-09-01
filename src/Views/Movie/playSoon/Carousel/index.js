import React from "react"
import { Carousel, WingBlank } from 'antd-mobile';
import "./car.css"
import { getItems } from '../api'
class Car extends React.Component {
  state = {
    data: ['1', '2', '3', '4', '5', '6'],
    title:"",
    imgHeight: "115px",
  }
  componentDidMount() {
    getItems().then(res => {
      console.log(res.data.data.comingList)

      const newArr = this.getImg(res.data.data.comingList)
      setTimeout(() => {
        this.setState({
          data: newArr,
        });
      }, 100);
    })
    // simulate img loading
    
  }
  getImg = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].img.replace('w.h', '120.180'))
    }
    return newArr 
  }
  render() {
    return (
      <div className="container">
        <WingBlank>
          <p className="p1">为您推荐：</p>
          <Carousel className="space-carousel"
            frameOverflow="hidden"
            cellSpacing={10}
            slideWidth="85px"
            autoplay={false}
            infinite
            dots={false}
          //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          //   afterChange={index => this.setState({ slideIndex: index })}
          >
            {this.state.data.map((val, index) => (
              <a
                key={val}
                //   href="http://www.alipay.com"//点击跳转路径
                style={{
                  display: 'block',
                  position: 'relative',
                  top: this.state.slideIndex === index ? -10 : 0,
                  height: this.state.imgHeight,
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={val}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: '115px' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </div>
    );
  }
}
export default Car