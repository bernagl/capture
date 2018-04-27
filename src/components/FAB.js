import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default ({ color, icon, navigate }) => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: color || 'red',
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 999
  }

  return (
    <TouchableOpacity onPress={() => navigate('AgregarMateria')} style={styles}>
      <Icon name={icon || 'ios-add'} />
    </TouchableOpacity>
  )
}
