import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Board from '../../components/Board/Board'
import FloattingBtn from '../../components/Button/FloattingBtn'
import Header from '../../components/Header'
import TaskForm from './TaskForm'
import TaskTile from './TaskTile'
import {useDispatch, useSelector,shallowEqual, connect} from 'react-redux'
import { getTasks } from '../../redux/store'
import { finishTask, deleteTask } from '../../redux/actions'
import _ from 'underscore'

 function TasksScreen(props: any) {
  const tasks = props.tasksList
  console.log(tasks)
  const [showForm, setShowForm] = useState(false)
  const dispatch = useDispatch()


  const renderItem = ({item}: any) => {
    return <TaskTile task={item} onFinishTask={onFinishTask} onDeleteTask={onDeleteTask}/>
  }

  const onFinishTask = (task: any) => {
    dispatch(finishTask(task.id))
  }

   const onDeleteTask = (task: any) => {
    dispatch(deleteTask(task.id))
   
  }

  const toggleForm = (status: boolean) => {
    setShowForm(!showForm)
  }

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {showForm && <TaskForm/>}
            <Board tasks={tasks}/>
          </>
        }
        contentContainerStyle={{flexGrow:1}}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloattingBtn showForm={showForm} toggleForm={toggleForm} />
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    tasksList: state.tasksList
  }
}

export default connect(mapStateToProps)(TasksScreen)
