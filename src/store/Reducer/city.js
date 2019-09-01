import actionType from '../Action/actionType'

const initState = {
    isLoad:false,
    list:[]
}

export default (state = initState , action) => {
    switch(action.type){
        case actionType.GET_CITY_LIST:
            return {
                isLoad:false,
                list:[...action.payload]
            }
        case actionType.GET_CITY_LIST_ERROR:
            return {
                err:-2,
                msg:'获取城市列表失败'
            }
        default : return state
    }
}