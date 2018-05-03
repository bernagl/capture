import React from 'react'
import { View, Text } from 'react-native'

export default ({ children, center, noPadding }) => {
  const style = {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: noPadding ? 0 : 10,
    justifyContent: center && 'center',
    alignItems: center && 'center'
  }

  return <View style={style}>{children}</View>
}
