export const cellActionTypes = {
    addCell: "ADD_CELL",
    deleteCell: "DELETE_CELL",
    moveCellUp: "MOVE_CELL_UP",
    moveCellDown: "MOVE_CELL_DOWN",
    deleteAll: "DELETE_ALL"
}
const actionWithId = (cellId, actionType) => ({
    type: actionType,
    payload: {
        id: cellId,
    }
})

// add Cell after the cell having given cellId
const addCell = (cellId) => actionWithId(cellId, cellActionTypes.addCell)

const deleteCell = (cellId) => actionWithId(cellId, cellActionTypes.deleteCell)

const moveCellUp = (cellId) => actionWithId(cellId, cellActionTypes.moveCellUp)

const moveCellDown = (cellId) => actionWithId(cellId, cellActionTypes.moveCellDown)

const deleteAll = () => ({
    type: cellActionTypes.deleteAll
})

export const cellActions = {
    addCell,
    deleteCell,
    moveCellUp,
    moveCellDown,
    deleteAll
}
