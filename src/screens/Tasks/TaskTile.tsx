import React from 'react'
import { Text,Image, StyleSheet, View, Pressable, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { finishTask } from '../../redux/actions'

export default function TaskTile({ task,onFinishTask,onDeleteTask }: any) {
  const dispatch = useDispatch()
  const handleFinishTask = (task:any) => {
    onFinishTask(task)
    if (task.isCompleted) {
      Alert.alert(`Super 😍, vous avez terminer ${task.title} `)
    }
  }

  const handleDeleteTask = (task: any) => {
    onDeleteTask(task)
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        
        <Pressable onPress={() => handleFinishTask(task) }>
          <Image
            style={styles.check }
            source={task.isCompleted ? require('../../../assets/icons/check_circle.png') : require('../../../assets/icons/circle.png')}
          />
        </Pressable>
        <Pressable onPress={() => handleFinishTask(task) }>
          <Text style={task.isCompleted ? styles.scratch : styles.title}>
            {task.title}
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={() => handleDeleteTask(task)}>
        <Image
          style={styles.check }
          source={require('../../../assets/icons/delete.png')}
        />
      </Pressable>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between'
  },
  check: {
    width: 30,
    height: 30,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'flex-start'
  },
  title: {
    marginLeft: 10,
    fontSize: 16
  },
  scratch: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginLeft: 10,
    fontSize: 16
  }
});