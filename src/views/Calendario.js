import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CheckBox,
  FlatList,
  Switch,
  TouchableOpacity,
  Platform
} from 'react-native'
import { Divider, TareaItem,View } from '../components'
import { Calendar } from 'react-native-calendars'
import { ListItem, Text } from 'react-native-ui-lib'
import { actualizarTarea } from '../actions/tarea_actions'
// import RoundCheckbox from 'rn-round-checkbox'
import Icon from 'react-native-vector-icons/Ionicons'

class Calendario extends Component {
  state = { platform: '', selectedDay: '' }
  static navigationOptions = {
    title: 'Calendario',
    header: null
  }

  componentDidMount() {
    this.setState({ platform: Platform.OS })
  }

  render() {
    const { tareas } = this.props
    const { platform, selectedDay } = this.state
    const { navigate } = this.props.navigation
    const tareasDia = tareas.filter(tarea => tarea.fecha === selectedDay)
    return (
      <View>
        <Calendar
          markedDates={{
            [selectedDay]: { selected: true }
          }}
          onDayPress={day => {
            this.setState({ selectedDay: day.dateString })
          }}
        />
        <View>
          <Divider />
          {tareasDia.length > 0 ? (
            <FlatList
              data={tareasDia}
              renderItem={({ item }) => <TareaItem tarea={item}
              navigate={navigate}
              actualizarTarea={this.props.actualizarTarea} />}
            />
          ) : (
            <View center>
              <Text dark20>No tienes nínguna tarea</Text>
            </View>
          )}
        </View>
      </View>
    )
  }
}

const styles = {
  switch: {
    paddingLeft: 10
  }
}

const mapDispatchToProps = ({ tareas }) => ({ tareas })

export default connect(mapDispatchToProps, { actualizarTarea })(Calendario)
