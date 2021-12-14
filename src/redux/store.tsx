import { ActionSheetIOS } from 'react-native';
import { createStore, combineReducers } from 'redux';
import {ADD_TASK, FINISH_TASK, DELETE_TASK} from './constants'

// creation de selector
export const getTasks = (store: any) =>  store.tasksList
export const getCompletedTasks = (store: any) =>  store.tasksList.filter((element: { isCompleted: boolean }) => element.isCompleted === true)

const initialState: any[] = [

]

const tasksList = (_state= initialState, _action: any) => {
  switch (_action.type) {
    case ADD_TASK:
      return [..._state, {
        id: new Date().getTime(),
        title: _action.payload.title,
        isCompleted: false
      }]
    case FINISH_TASK:
      let newState: object[] = []
      _state.forEach(task => {
        if (task.id === _action.payload.id) {
          task.isCompleted = !task.isCompleted
          newState.push(task)
          return;
        } else {
          newState.push(task)
        }
        
      })
      return newState
    case DELETE_TASK:
      let newStateDelete: object[] = []
      _state.forEach(task => {
        if (task.id === _action.payload.id) {
          console.log("_action.payload.id ",_action.payload.id)
          return;
        } else {
          console.log(task)
          newStateDelete.push(task)
        }
        
      })
      return newStateDelete
    default:
      return _state
  }
}


const rootReducers = combineReducers({
  tasksList: tasksList
})
export const store = createStore(rootReducers)