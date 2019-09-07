// 加载中的动画效果
import actionType from '../Action/actionType'
const initState = {
    isLocaiton:true
}
export default (state = initState , action) => {
    switch(action.type){
        case actionType.CHANGE_LOCATION_STATE:
            let res = state.isLocaiton
            res = !res;
            return {
                isLocaiton:res
            }
        default: return state
    }
}