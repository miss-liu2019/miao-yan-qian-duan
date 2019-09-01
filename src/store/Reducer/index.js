import { combineReducers } from 'redux'

import cityList from './city'
import Location from './location'
import isLocation from './zhuangbi'

export default combineReducers({
    cityList,
    Location,
    isLocation
})