import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react'

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Vendredi",
  "Samedi"
]

const months = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
]

export default function Header() {
  const date = new Date()
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {`${days[date.getDay()]} `}
        <Text style={styles.seconde_date}>
          {
            date.getDate() <= 9 ?
              `, 0${date.getDate()} ${months[date.getMonth()]}` :
              `, ${date.getDate()} ${months[date.getMonth()]}`
          }
        </Text>
      </Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 17,
    paddingTop: 40,
    paddingBottom: 20
  },
  date: {
    fontSize: 25,
    fontWeight: "bold"
  },
  seconde_date: {
    fontWeight: "normal"
  }
})
