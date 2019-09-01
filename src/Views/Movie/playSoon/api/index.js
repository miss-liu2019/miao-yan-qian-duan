import axios from "axios"

const getItems = () => {
    return axios.get('/api/movieComingList?cityId=55')
}

// const getItemss = (params) => {
//     return axios.get('/api/detailmovie')
// }
export function getItemss (params){
    return axios({
        url:"/ajax/detailmovie",
        method:"get",
        params
    })
}
export {getItems}