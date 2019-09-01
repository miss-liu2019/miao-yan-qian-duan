import actionType from '../Action/actionType'

const initState = {
    city:'南京',
    id:55
}

export default (state = initState ,action) => {
    // console.log(action)
    switch(action.type){
        case actionType.GET_LOCATION:
            return action.payload
        case actionType.SET_CITY:
            return action.payload
        case actionType.GET_LOCATION_ERROR:
            return {
                ...state,
                err:-1,
                msg:'获取地理位置失败'
            }
        default :return state
    }
}

