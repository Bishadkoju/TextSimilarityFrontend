import { statusActionTypes } from "../actions/statusActions"

const validStates = ["disconnected", "loading", "connected"]
const initialState = validStates[0]
const status = (state= initialState, action) => {
    switch (action.type){
        case statusActionTypes.changeStatus: {
            if (validStates.includes(action.payload)) {
                return action.payload
            }
            return state
        }
        default: {
            return state
        }
    }
}

export default status