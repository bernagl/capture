import React, { Component } from 'react'
import { FlatList, Switch, Platform } from 'react-native'
import { connect } from 'react-redux'
import { toggleTarea } from '../actions/tarea_actions'
import { TareaItem, View } from '../components'
import {
  Segment,
  Button,
  Fab,
  Body,
  Text,
  ListItem,
  CheckBox
} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

class Materia extends Component {
  state = { platform: '' }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.materia : 'Materia'
    }
  }

  componentDidMount() {
    this.setState({ platfotm: Platform.OS, tab: 'tarea' })
  }

  setActiveTab = tab => {
    this.setState({ tab })
  }

  // renderRow({ item }, platform) {
  //   return (
  //     <ListItem>
  //       <CheckBox checked={item.status} onPress={this.toggleTarea(item)} />
  //       <Body>
  //         <Text>{item.tarea}</Text>
  //       </Body>
  //     </ListItem>
  //   )
  // }

  render() {
    const { platform, tab } = this.state
    const { materia, id } = this.props.navigation.state.params
    return (
      <View noPadding>
        <Segment style={{ backgroundColor: 'white' }}>
          <Button
            first
            active={tab === 'tarea' ? true : false}
            onPress={() => this.setActiveTab('tarea')}
          >
            <Text>Tareas</Text>
          </Button>
          <Button
            last
            active={tab === 'foto' ? true : false}
            onPress={() => this.setActiveTab('foto')}
          >
            <Text>Fotos</Text>
          </Button>
        </Segment>
        {tab === 'tarea' ? (
          <FlatList
            data={this.props.tareas}
            renderItem={row => (
              <TareaItem
                tarea={row.item}
                toggleTarea={this.props.toggleTarea}
              />
            )}
          />
        ) : (
          <View>
            <Text>Fotos</Text>
          </View>
        )}
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          onPress={() =>
            this.props.navigation.navigate('AgregarTarea', { id, materia })
          }
          position="bottomRight"
        >
          <Icon
            active
            name="ios-add-circle-outline"
            size={25}
            style={{ color: 'white' }}
          />
        </Fab>
      </View>
    )
  }
}

const mapDisapatchToProps = ({ tareas }) => ({ tareas })

export default connect(mapDisapatchToProps, { toggleTarea })(Materia)
