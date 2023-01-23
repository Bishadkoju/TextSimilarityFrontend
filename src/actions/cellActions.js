export const cellActionTypes = {
    addEmptyCell: "ADD_EMPTY_CELL",
    addCell: "ADD_CELL",
    deleteCell: "DELETE_CELL",
    moveCellUp: "MOVE_CELL_UP",
    moveCellDown: "MOVE_CELL_DOWN",
    deleteAll: "DELETE_ALL",
    updateCell: "UPDATE_CELL"
}
const actionWithId = (cellId, actionType) => ({
    type: actionType,
    payload: {
        id: cellId,
    }
})

// add Cell after the cell having given cellId
const addEmptyCell = (cellId) => actionWithId(cellId, cellActionTypes.addEmptyCell)

const addCell = (state) => ({
    type: cellActionTypes.addCell,
    payload: state,
})

const deleteCell = (cellId) => actionWithId(cellId, cellActionTypes.deleteCell)

const moveCellUp = (cellId) => actionWithId(cellId, cellActionTypes.moveCellUp)

const moveCellDown = (cellId) => actionWithId(cellId, cellActionTypes.moveCellDown)

const deleteAll = () => ({
    type: cellActionTypes.deleteAll
})

const updateCell = (state) => ({
    type:cellActionTypes.updateCell,
    payload: state
})

export const cellActions = {
    addEmptyCell,
    addCell,
    updateCell,
    deleteCell,
    moveCellUp,
    moveCellDown,
    deleteAll
}
