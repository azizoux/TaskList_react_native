import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from '../actions/actionsType'
// Reducers: Functions retournent un nouveau state
const initialState = [{id:1, title: "Init Task", isCompleted: false}]

export const tasksList = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return [...state, {
                id: Date.now(),
                title: action.payload.title,
                isCompleted: false
            }]
        case TOGGLE_TASK:
            const newArray = [...state]
            const taskIndex = newArray.findIndex((t) => t.id == action.payload.id)
            newArray[taskIndex].isCompleted = !newArray[taskIndex].isCompleted
            newArray.splice(taskIndex, 1, newArray[taskIndex])
            return newArray
        case DELETE_TASK:
            const newState = [...state]
            const indexTask = newState.findIndex((t) => t.id == action.payload.id)
            newState.splice(indexTask, 1)
            return newState
        default:
            return state
    }
}
