import { ADD, REMOVE } from "./actionTypes";


export const addAction = (data) => ({
    type: ADD,
    payload: data
})

export const createThunkAction = (data) => {
    return async (dispatch) => {
        await dispatch(addAction(data))
    }
}

export const deleteAction = (id) => ({
    type: REMOVE,
    payload: id
})

export const deleteThunkAction=(id)=>{
    return async (dispatch)=>{
        await dispatch(deleteAction(id))
    }
}