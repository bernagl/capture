import React from 'react'
import { Body, CheckBox, ListItem, Text } from 'native-base'

export default ({ toggleTarea, tarea }) => {
  return (
    <ListItem>
      <CheckBox checked={tarea.status} onPress={() => toggleTarea(tarea)} />
      <Body>
        <Text>{tarea.tarea}</Text>
      </Body>
    </ListItem>
  )
}
