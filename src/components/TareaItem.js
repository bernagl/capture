import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Body, CheckBox, ListItem, Text } from 'native-base'

export default ({ navigate, tarea, actualizarTarea }) => {
  return (
    <ListItem>
      <CheckBox checked={tarea.status} onPress={() => actualizarTarea({...tarea, status: !tarea.status})} />
      <TouchableOpacity onPress={() => navigate('AgregarTarea', { tarea })}>
        <Body>
          <Text>{tarea.tarea}</Text>
        </Body>
      </TouchableOpacity>
    </ListItem>
  )
}
