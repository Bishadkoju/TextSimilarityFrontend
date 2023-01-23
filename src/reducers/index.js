import { combineReducers } from "redux";
import cellReducer from './cellReducer'
import statusReducer from './statusReducer'

export default combineReducers({
    cells: cellReducer,
    status: statusReducer
})