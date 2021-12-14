import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function FloattingBtn({showForm,toggleForm}: any) {
  const onHandleShowForm = () => {
    toggleForm(!showForm)
  }
  return (
    <Pressable  onPress={() => onHandleShowForm()} style={styles.btn}>
        
        {
          showForm ? <Text style={styles.btnText}>x</Text> :
            <Text style={styles.btnText}>+</Text>}
      </Pressable>
  )
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "blue",
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: 50
  },
  btnText: {
    color: 'white',
    fontSize: 20
  }
})