import React from 'react'
import { View, Text } from 'react-native'

export default ({ color, height }) => {
  const style = {
    borderWidth: 0.5,
    borderColor: 'lightgray',
    margin: 5
  }

  return <View style={style} />
}
