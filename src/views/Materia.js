import React, { Component } from 'react'
import { CheckBox, FlatList, Switch, Platform } from 'react-native'
import { connect } from 'react-redux'
import { View } from '../components'
import { ListItem, Text } from 'react-native-ui-lib'

class Materia extends Component {
  state = { platform: '' }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.nombre : 'Materia'
    }
  }

  componentDidMount() {
    this.setState({ platfotm: Platform.OS })
  }

  renderRow({ item }, platform) {
    return (
      <ListItem>
        <ListItem.Part>
          {platform === 'android' ? (
            <CheckBox value={item.status} />
          ) : (
            <Switch value={item.status} />
          )}
        </ListItem.Part>
        <ListItem.Part>
          <Text>{item.nombre}</Text>
        </ListItem.Part>
      </ListItem>
    )
  }

  render() {
    const { platform } = this.state
    return (
      <View>
        <FlatList
          data={this.props.tareas}
          renderItem={row => this.renderRow(row, platform)}
        />
      </View>
    )
  }
}

const mapDisapatchToProps = ({ tareas }) => ({ tareas })

export default connect(mapDisapatchToProps)(Materia)
