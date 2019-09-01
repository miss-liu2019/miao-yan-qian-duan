import actionType from './actionType'
import axios from 'axios'
export const getLocation = () => dispatch => {
    axios.get('/api/getLocation').then(res=>{
        // console.log(res.data.data)
        dispatch({
            type:actionType.GET_LOCATION,
            payload:res.data.data
        })
    }).catch(err=>{
        console.log(err)
        dispatch({
            type:actionType.GET_LOCATION_ERROR
        })
    })
}
export const setCity = item => dispatch => {
    dispatch({
        type:actionType.SET_CITY,
        payload:item
    })
}

export const changeLocstionState = () => dispatch => {
    dispatch({
        type:actionType.CHANGE_LOCATION_STATE
    })
}