// Selectors: selectionner une partie de notre store
//export const getTasks = store => store.tasksList
export function getTasks(store){
    return store.tasksList
}
// export const getCompletedTasks = store => store.tasksList.filter(tast => tasksList.isCompleted)
export function getCompletedTasks(store){
    let completedTasks = store.tasksList.filter(tast => tasksList.isCompleted)
    return completedTasks
}
