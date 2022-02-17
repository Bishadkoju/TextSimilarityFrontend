import { combineReducers } from "redux";
import cellReducer from './cellReducer'

export default combineReducers({
    cells: cellReducer
})