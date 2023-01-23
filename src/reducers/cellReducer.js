import { cellActionTypes } from "../actions/cellActions";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(),
    value: "",
    results: [],
    selectedResultIndex: 0,
  }
];

const cellReducer = (state = initialState, action) => {
  switch (action.type) {
    case cellActionTypes.addEmptyCell: {
      let newState = [...state]
      const newCell = {
        id: nanoid(),
        value: "",
        results: [],
        selectedResultIndex: 0,
      };
      let cellIndex = newState.findIndex((item)=>item.id === action.payload.id)
      if (cellIndex ===-1 ){ cellIndex=state.length-1}
      newState.splice(cellIndex+1,0,newCell);
      return newState
    }

    case cellActionTypes.addCell: {
      let newState = [...state]
      const newCell = {
        id: nanoid(),
        value: action.payload.value || "",
        results: action.payload.results || [],
        selectedResultIndex: action.payload.selectedResultIndex || 0,
      };

      newState.push(newCell)

      return newState
    }

    case cellActionTypes.updateCell: {
      let newState = [...state]
      const existingCell = newState.find((x) => x.id === action.payload.id)
      if (action.payload.value)
        existingCell.value = action.payload.value
      if (action.payload.results)
        existingCell.results = action.payload.results
      if (action.payload.selectedResultIndex)
        existingCell.selectedResultIndex = action.payload.selectedResultIndex 
      // console.log(newState, existingCell)

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
      return []

    default:
      return state;
  }
};

export default cellReducer;
