import axios from 'axios'

// http://39.97.33.178/api/searchList?cityId=10&kw=a
//http://m.maoyan.com/ajax/search?kw=1&cityId=55&stype=-1
const searchList = (id) => { //搜索列表接口
    // return axios.get(`/api/searchList?cityId=10&kw=${id}`)
    return axios.get(`/ajax/search?kw=${id}&cityId=55&stype=-1`)
}

export default searchList
// 正在热映接口
const  getItem = () => {
    return axios.get('/api/movieOnInfoList?cityId=10')
}
export {getItem}

//电影详情接口
// const getMovie = (params) =>{
//     return axios.get('/ajax/detailmovie',params)
// }
// export {getMovie}

export function getMovie(params) {
    return axios({
        url:'/ajax/detailmovie',//http://m.maoyan.com/ajax/detailmovie?movieId=1215605
        method:"get",
        params
    })
}


// 1.影院接口(cinema)
const getItem1 = (id) => {
    return axios.get(`/api/cinemaList?cityId=${id}`)
}


// 2.电影列表接口(cinDetail)
const getCinemaDail = (id) => {
    return axios.get(`/ajax/cinemaDetail?cinemaId=${id}`)
}
//http://m.maoyan.com/ajax/cinemaDetail?cinemaId=24466


//http://m.maoyan.com/ajax/search?kw=d&cityId=55&stype=2

const searchCinemaList = (msg) => {
    return axios.get(`/ajax/search?kw=${msg}&cityId=55&stype=2`)
}
export {
    getItem1,
    getCinemaDail,
    searchList,
    searchCinemaList

}

