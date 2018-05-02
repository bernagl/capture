import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CheckBox,
  FlatList,
  Switch,
  TouchableOpacity,
  Platform
} from 'react-native'
import { Divider, View } from '../components'
import { Calendar } from 'react-native-calendars'
import { ListItem, Text } from 'react-native-ui-lib'
import { toggleTarea } from '../actions/tarea_actions'
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

  toggleTarea = tarea => {
    this.props.toggleTarea(tarea)
  }

  renderItem = (item, platform) => {
    return (
      <ListItem>
        <ListItem.Part>
          {platform === 'ios' ? (
            <TouchableOpacity onPress={() => this.toggleTarea(item)}>
              {item.status ? (
                <Icon name="ios-checkmark-circle-outline" size={25} />
              ) : (
                <Icon name="ios-radio-button-off-outline" size={25} />
              )}
            </TouchableOpacity>
          ) : (
            <CheckBox
              value={item.status}
              onValueChange={() => this.toggleTarea(item)}
            />
          )}
        </ListItem.Part>
        <ListItem.Part>
          <Text dark20 style={styles.switch}>
            {item.nombre}
          </Text>
        </ListItem.Part>
      </ListItem>
    )
  }

  render() {
    const { tareas } = this.props
    const { platform, selectedDay } = this.state
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
              renderItem={({ item }) => this.renderItem(item, platform)}
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

export default connect(mapDispatchToProps, { toggleTarea })(Calendario)
