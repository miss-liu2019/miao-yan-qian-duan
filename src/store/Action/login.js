import actionType from './actionType'
import axios from 'axios'
const startLogin = () => {
    return {
        type: actionType.LOGIN_START,
        payload,
    }
}

const startSuccess = (payload) => {
    return {
        type: actionType.LOGIN_SUCCESS,
        payload,
    }
}

const startError = () => {
    return {
        type: actionType.LOGIN_ERROR
    }
}

export const userLogin = msg => dispatch => {
    dispatch(startLogin)
    axios('').then(res=>{
        
    })
}