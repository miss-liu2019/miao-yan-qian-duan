import actionType from './actionType'
import axios from 'axios'
export const getCity = () => dispatch => {
    axios.get('/api/cityList').then(res=>{
        // console.log(res.data.data.cities)
        dispatch({
            type:actionType.GET_CITY_LIST,
            payload:res.data.data.cities
        })
    }).catch(err=>{
        console.log(err)
        dispatch({
            type:actionType.GET_CITY_LIST_ERROR
        })
    })
}