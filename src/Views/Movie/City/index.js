import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setCity } from '../../../store/Action/location'
import './index.css'
class City extends Component {
    state = {
        hotcity: [
            {
                id: 1,
                isHot: 1,
                nm: "北京",
                py: "beijing",
            }
        ],
        cityList: [
            {
                index: "A",
                list: [
                    {
                        id: 150,
                        isHot: 0,
                        nm: "阿拉善盟",
                        py: "alashanmeng",
                    }
                ]
            }
        ]
    }
    componentDidMount() {
        console.log(this.props)
        let { hotcity, citylist } = this.getlist(this.props.citylist.list)
        // console.log(hotcity)
        // console.log(citylist)
        this.setState({
            hotcity: hotcity,
            cityList: citylist
        })
    }
    getlist = (cities) => {
        let citylist = [];
        let hotcity = [];

        for (let i = 0; i < cities.length; i++) {
            if (cities[i].isHot == 1) {
                hotcity.push(cities[i]);
            }
        }
        // console.log(hotcity[2].py)
        for (let i = 0; i < cities.length; i++) {
            let index = cities[i].py.substr(0, 1).toUpperCase();
            if (test(index)) {
                citylist.push({
                    index,
                    list: [cities[i]]
                });
            } else {
                for (let j = 0; j < citylist.length; j++) {
                    if (citylist[j].index == index) {
                        citylist[j].list.push(cities[i]);
                    }
                }
            }
        }
        function test(index) {
            for (let i = 0; i < citylist.length; i++) {
                if (citylist[i].index == index) {
                    return false;
                }
            }
            return true;
        }
        citylist.sort((item1, item2) => {
            if (item1.index < item2.index) {
                return -1;
            } else if (item1.index > item2.index) {
                return 1;
            } else {
                return 0;
            }
        });
        return { hotcity, citylist };
    }
    setCity(item){
        console.log(this.props)
        this.props.setCity(item)
        this.props.history.push('/movie/hot')
    }
    handleToIndex(index){
        // console.log(this.refs.city_sort)
        var h2 = this.refs.city_sort.getElementsByTagName('h2');
        console.log(h2)
        this.refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
        // this.$refs.city_List.toScrollTop(-h2[index].offsetTop);
    }
    render() {
        return (
            <div className="city_body">
                <div className="city_list">
                    <div className="city_hot">
                        <h2>热门城市</h2>
                        <ul className="clearfix">
                            {this.state.hotcity.map(item => {
                                return <li onClick = {this.setCity.bind(this,item)} style = {{listStyle:'none'}} key={item.id}>{item.nm}</li>
                            })}
                        </ul>
                    </div>
                    <div className="city_sort" ref = 'city_sort'>
                        <div>
                            {this.state.cityList.map(item => {
                                return (
                                    <Fragment key={item.index}>
                                        <h2>{item.index}</h2>
                                        <ul>
                                            {item.list.map(item => {
                                                return (
                                                    <Fragment>
                                                        <li onClick = {this.setCity.bind(this,item)} key={item.id}>{item.nm}</li>
                                                    </Fragment>
                                                )
                                            })}
                                        </ul>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="city_index">
                    <ul>
                        {this.state.cityList.map((item,index) => {
                            return (
                                <Fragment key={item.id}>
                                    <li onClick = {this.handleToIndex.bind(this,index)}>{item.index}</li>
                                </Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const getState = state => {
    console.log(state)
    return {
        citylist: state.cityList
    }
}

export default connect(getState, { setCity })(City)
