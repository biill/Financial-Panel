import {combineReducers} from 'redux'

import user from '../store/user'
import stock from './stockReducer'
const reducer = combineReducers({stock})

export default reducer
