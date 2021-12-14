import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import {addTask} from '../../redux/actions'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const onChangeTitle = (value: any) => {
    setTitle(value)
  }

  const onHandleAddTask = () => {
    if (title === '') {
      Alert.alert("Le nom de la tâche est obligatoire")
    } else {

      dispatch(addTask(title))
      setTitle("")
    }
    
  }

  return (
    <View style={styles.container}>
         <TextInput
          style={styles.input}
          onChangeText={onChangeTitle}
          value={title}
          placeholder="Que voulez vous faire ?"
        />
        <TouchableOpacity style={styles.button} onPress={onHandleAddTask}>
          <Text style={styles.btnTxt}>Ajouter</Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 12,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  button: {
    backgroundColor: 'blue', 
    width: 70,
    padding: 10,
    alignItems: "center",
  },
  btnTxt: {
    color: "white"
  }
})

