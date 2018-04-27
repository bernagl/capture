import React from 'react'
import { View, Text } from 'react-native'

export default ({ children, center }) => {
  const style = {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: center && 'center',
    alignItems: center && 'center'
  }

  return <View style={style}>{children}</View>
}
