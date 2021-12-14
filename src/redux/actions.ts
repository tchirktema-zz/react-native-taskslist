import { ADD_TASK,DELETE_TASK,FINISH_TASK } from './constants'

export const addTask = (title:string) => {
  return {
    type: ADD_TASK,
    payload: {
      title
    }
  }
}

export const finishTask = (id: number) => {
  return {
    type: FINISH_TASK,
    payload: {
      id
    }
  }
}

export const deleteTask = (id: number) => {
  return {
    type: DELETE_TASK,
    payload: {
      id
    }
  }
}