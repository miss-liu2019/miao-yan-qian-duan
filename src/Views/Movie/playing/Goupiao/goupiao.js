import React from 'react'
import "./goupiao.css"
import Cinema from '../../../Cinema/cinema'
import { withRouter } from 'react-router-dom'
import { getMovie } from '../../../../api'

@withRouter
class Goupiao extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            data: {}
        }
    }
    componentWillMount() {
        // console.log(this.props.location.query.setTitle)
        // const ID = this.props.location.query.id
        // this.setState({
        //     id: ID
        // })
        //  if(this.state.id ===""){
        //     this.props.history.push('/movie/hot')
        //  }else{
        //     this.props.history.push('/goupiao')

        //  }
    }

    componentDidMount() {
        if (!this.props.location.query) {
            this.props.history.push('/movie/hot')
        }else{
            const ID = this.props.location.query.id
            this.setState({
                    id: ID
                })
            getMovie({ movieId: ID }).then(res => {
                // console.log(res.data)
                this.props.location.query.setTitle(res.data.detailMovie.nm)
                this.setState({
                    data: res.data.detailMovie
                })
            })
        }


    }

    getxiangqing() {
        // ID = this.state.id
        var path = {
            pathname: '/xiangqing',
            query: { id: this.state.id }
        }
        // console.log(this.state.id)
        this.props.history.push(path)
    }
    huituo() {
        this.props.history.push('/movie/hot')
    }



    render() {
        // console.log(this.state.data)
        // console.log(this.state.id)
        return (
            <div>
                <div className="box">
                    <div className="box1" onClick={this.huituo.bind(this)}>
                        《
                    </div>
                    <div className="box_title">
                        <div className="pic1" >
                            <img src={this.state.data.img ? this.state.data.img.replace('w.h', '128.180') : ""} alt="" />
                        </div>
                        <div className="title_box">
                            <div>{this.state.data.nm}</div>
                            <div>{this.state.data.enm}</div>
                            <div>
                                <span>{this.state.data.sc}</span>
                                <span>({this.state.data.snum}万人评)</span>
                            </div>
                            <div>{this.state.data.cat}</div>
                            <div>{this.state.data.src}/{this.state.data.episodeDur}分钟</div>
                            <div>{this.state.data.pubDesc}大陆上映</div>
                        </div>
                    </div>
                    {/* 右边的箭头 */}
                    <div className="jiantou" onClick={this.getxiangqing.bind(this)}>
                        <img src={require('./image/2.png')} alt="" className='img' />
                        {/* <span>></span>  */}
                    </div>
                </div>
                <div>
                    <Cinema />
                </div>

            </div>
        )
    }
}

export default Goupiao