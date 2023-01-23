export const statusActionTypes = {
    changeStatus: "CHANGE_STATUS"
}

const changeStatus = (newStatus) => ({
    type: statusActionTypes.changeStatus,
    payload: newStatus,
})


export const statusActions = {
   changeStatus
}
