import React, { Component } from 'react'
import { Text } from 'react-native'
import { View } from '../components'

export default class Tarea extends Component {
  static navigationOptions = {
    title: 'Tarea',
    header: null    
  }

  render() {
    return (
      <View>
        <Text>View Tarea</Text>
      </View>
    )
  }
}
