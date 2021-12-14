import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import {useSelector} from 'react-redux'
import { getTasks, getCompletedTasks } from '../../redux/store'

export default function Board({ tasks }: any) {
  
  const allTasks = useSelector((state) => getTasks(state))
  const completedTasks = useSelector((state) => getCompletedTasks(state))
  
  const filterTasks = (completed: boolean) => {
    const currentTasks = tasks.filter((element: { isCompleted: boolean }) => element.isCompleted === completed)
    return currentTasks.length
  }

  const formatNumber = (number: number) => {
    return number <= 9 ? `0${number}` : `${number}`
  }

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <Text style={styles.number}>
          {formatNumber(allTasks.length)}
        </Text>
        <Text>Tâche(s) ajouté(s)</Text>
      </View>
      <View style={styles.subcontainer2}>
        <Text style={styles.number}>{ formatNumber(completedTasks.length)}</Text>
        <Text>Tâche(s) terminé(s)</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
    justifyContent: 'space-between'
  },
  subcontainer2: {
    alignItems: 'flex-end'
  },
  subcontainer1: {
    alignItems: 'flex-start'
  },
  number: {
    fontSize: 25,
    fontWeight: "bold"
  }
})
