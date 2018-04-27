import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Card, Text, View } from 'react-native-ui-lib'
import { View as V } from 'react-native'

export default class Materia extends Component {
  state = { options: false }
  render() {
    const {
      color,
      edificio,
      inicio,
      fin,
      maestro,
      nombre,
      salon
    } = this.props.materia
    return (
      <TouchableOpacity
        onPress={() => this.props.navigate('Materia', { nombre })}
      >
        <Card containerStyle={{ marginVertical: 5 }} height={120}>
          <Card.Section body margin-0 padding-10>
            <Text text30 orange50>
              {nombre}
            </Text>
            <View row>
              <View column>
                <Text text60 dark40>{`${inicio} - ${fin}`}</Text>
              </View>
            </View>
            <View row padding-0>
              <Text
                text80
                dark40
              >{`Aula: ${salon}  Profesor: ${maestro}`}</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.setState({ options: !this.state.options })}
              style={styles.actionBtn}
            >
              <Text>{this.state.options ? 'x' : '+'}</Text>
            </TouchableOpacity>
          </Card.Section>
          <View
            bg-dark-30
            style={this.state.options ? styles.showOptions : styles.hideOptions}
          >
            <TouchableOpacity>
              <Text>+ Tarea</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>+ Examen</Text>
            </TouchableOpacity>
          </View>
          <View bg-dark-30 style={styles.bar} />
        </Card>
      </TouchableOpacity>
    )
  }
}

const styles = {
  actionBtn: {
    position: 'absolute',
    right: 10,
    top: 5
  },
  cardSection: {
    // padding: 5
  },
  bar: {
    flex: 2,
    // height: 10,
    backgroundColor: 'green',
    margin: 0
  },
  showOptions: {
    display: 'flex',
    backgroundColor: 'green',
    padding: 5,
    borderRadious: 50
  },
  hideOptions: {
    display: 'none',
    backgroundColor: 'red',
    padding: 10
  }
}
