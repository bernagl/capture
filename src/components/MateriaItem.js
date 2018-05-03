import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {
  Card,
  CardItem,
  H3,
  Button,
  Icon,
  List,
  ListItem,
  Text
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default ({
  color,
  edificio,
  inicio,
  fin,
  profesor,
  materia,
  navigate,
  aula,
  id
}) => {
  return (
    <Grid
      style={{ paddingLeft: 10 }}
      // onPress={() => navigate('Materia', { materia })}
    >
      <Row>
        <TouchableOpacity onPress={() => navigate('Materia', { materia, id })}>
          <H3 style={{ color }}>{materia}</H3>
        </TouchableOpacity>
      </Row>
      <Row>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text>Profesor: {profesor}</Text>
          <Text>Aula: {aula}</Text>
        </View>
      </Row>
      <Row>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text>Inicio: {inicio}</Text>
          <Text>Fin: {fin}</Text>
        </View>
      </Row>
    </Grid>
  )
}
