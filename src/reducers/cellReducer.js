import { cellActionTypes } from "../actions/cellActions";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(),
    value: "",
    results: [],
    isResultSelected: false,
    selectedResultIndex: 0,
  },{
    id: nanoid(),
    value: "",
    results: [],
    isResultSelected: false,
    selectedResultIndex: 0,
  }
];
const cellReducer = (state = initialState, action) => {
  switch (action.type) {
    case cellActionTypes.addCell: {
      let newState = [...state]
      const newCell = {
        id: nanoid(),
        value: "",
        results: [],
        isResultSelected: false,
        selectedResultIndex: 0,
      };
      let cellIndex = newState.findIndex((item)=>item.id === action.payload.id)
      if (cellIndex ===-1 ){ cellIndex=state.length-1}
      newState.splice(cellIndex+1,0,newCell);
      return newState
    }

    case cellActionTypes.deleteCell: {
      let newState = [...state]
      let cellIndex = newState.findIndex((item)=>item.id === action.payload.id)
      newState.splice(cellIndex,1)
      return newState
    }

    case cellActionTypes.moveCellUp: {
      let newState = [...state]
      let cellIndex = newState.findIndex((item)=>item.id === action.payload.id)
        const cell = newState.splice(cellIndex, 1)
        newState.splice(cellIndex-1, 0, cell[0])
      
      return newState
    }

    case cellActionTypes.moveCellDown: {
      let newState = [...state]
      let cellIndex = newState.findIndex((item)=>item.id === action.payload.id)
      const cell = newState.splice(cellIndex, 1)
      newState.splice(cellIndex+1, 0, cell[0])
      return newState
    }

    case cellActionTypes.deleteAll:
      return [{
        id: nanoid(),
        value: "",
        results: [],
        isResultSelected: false,
        selectedResultIndex: 0,
      }]

    default:
      return state;
  }
};

export default cellReducer;
