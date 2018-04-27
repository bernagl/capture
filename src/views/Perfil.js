import React, { Component } from 'react'
import { Text } from 'react-native'
import { View } from '../components'

export default class Perfil extends Component {
  static navigationOptions = {
    title: 'Perfil'
  }

  render() {
    return (
      <View>
        <Text>View Perfil</Text>
      </View>
    )
  }
}
