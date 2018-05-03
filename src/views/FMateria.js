import React, { Component } from 'react'
import {
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { FAB, View } from '../components'
import { TextInput, View as V } from 'react-native'
import { RkChoice, RkTextInput } from 'react-native-ui-kitten'
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  CheckBox,
  ListItem,
  Body,
  Button,
  Text,
  Input,
  Item
} from 'native-base'
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux'
import { agregarMateria } from '../actions/materia_actions'
import Clock from '../assets/clock-4pm.png'

class FMateria extends Component {
  static navigationOptions = {
    title: 'Agregar materia'
  }

  state = {
    modalColor: false,
    color: '#609782',
    checked: false,
    materia: 'Quimica',
    profesor: 'Chuy',
    dias: [
      {
        label: 'Lunes',
        inicio: '',
        fin: '',
        checked: false,
        edificio: '',
        aula: '',
        dia: 1
      },
      {
        label: 'Martes',
        inicio: '',
        fin: '',
        checked: false,
        edificio: '',
        aula: '',
        dia: 2
      },
      {
        label: 'Miércoles',
        inicio: '12:00',
        fin: '13:00',
        checked: true,
        edificio: '1',
        aula: '1201',
        dia: 3
      },
      {
        label: 'Jueves',
        inicio: '',
        fin: '',
        checked: false,
        edificio: '',
        aula: '',
        dia: 4
      },
      {
        label: 'Viernes',
        inicio: '',
        fin: '',
        checked: false,
        edificio: '',
        aula: '',
        dia: 5
      },
      {
        label: 'Sábado',
        inicio: '',
        fin: '',
        checked: false,
        edificio: '',
        aula: '',
        dia: 6
      }
      // { dia: 'Domingo', inicio: '', fin: '', checked: false, edificio:'', aula: '', dia: 0 }
    ],
    modal: false,
    dia: null
  }

  toggleChecked = dia => {
    const { dias } = this.state
    const status = !dias[dia].checked
    dias[dia].checked = status
    this.setState({ dias, dia, modal: status })
  }

  handleDia = (prop, val) => {
    const { dia, dias } = this.state
    dias[dia][prop] = val
    this.setState({ dias })
  }

  handleInput = (prop, value) => {
    this.setState({ [prop]: value })
  }

  renderDias = () => {
    const { dias } = this.state
    return dias.map((dia, key) => {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <CheckBox
            checked={dia.checked}
            onPress={() => this.toggleChecked(key)}
          />
          <Body>
            <Text>{dia.label}</Text>
          </Body>
        </ListItem>
      )
    })
  }

  onSubmit = () => {
    const { dias, materia, profesor, color } = this.state
    const objMateria = { color, dias, materia, profesor }
    this.props.agregarMateria(objMateria)
    this.setState({ modal: false })
  }

  render() {
    const {
      dia,
      dias,
      checked,
      color,
      materia,
      modal,
      modalColor,
      profesor
    } = this.state
    return (
      <ScrollView>
        <View>
          <RkTextInput
            value={materia}
            onChangeText={text => this.handleInput('materia', text)}
            label="Materia"
          />
          <RkTextInput
            value={profesor}
            onChangeText={text => this.handleInput('profesor', text)}
            label="Profesor"
          />
          <RkTextInput
            value={color}
            onBlur={() => this.setState({ modalColor: true })}
            inputStyle={color && { backgroundColor: color }}
            onChangeText={text => this.handleInput('color', text)}
            label="Color"
          />
          {this.renderDias()}
          <Button block info style={{ marginTop: 20 }} onPress={this.onSubmit}>
            <Text>Guardar!</Text>
          </Button>
          <Modal animationType="slide" transparent={false} visible={modal}>
            {modal && (
              <V style={{ marginTop: 22, padding: 10 }}>
                <Text style={{ fontSize: 28, alignSelf: 'center' }}>
                  {dias[dia].label}
                </Text>
                <V>
                  <RkTextInput
                    value={dias[dia].edificio}
                    onChangeText={text => this.handleDia('edificio', text)}
                    label="Edificio"
                  />
                  <RkTextInput
                    value={dias[dia].aula}
                    onChangeText={text => this.handleDia('aula', text)}
                    label="Aula"
                  />
                  <V
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      paddingBottom: 10
                    }}
                  >
                    <DatePicker
                      style={{ flex: 1, marginRight: 5 }}
                      date={dias[dia].inicio}
                      mode="time"
                      placeholder="Inicio"
                      confirmBtnText="Seleccionar"
                      iconSource={Clock}
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 36
                        }
                      }}
                      onDateChange={date => {
                        this.handleDia('inicio', date)
                      }}
                    />
                    <DatePicker
                      style={{ flex: 1, marginLeft: 5 }}
                      date={dias[dia].fin}
                      mode="time"
                      iconSource={Clock}
                      placeholder="Fin"
                      confirmBtnText="Seleccionar"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 36
                        }
                      }}
                      onDateChange={date => {
                        this.handleDia('fin', date)
                      }}
                    />
                  </V>
                  <Button
                    block
                    info
                    style={{ marginTop: 20 }}
                    onPress={() => {
                      this.setState({ modal: !modal })
                    }}
                  >
                    <Text>Guardar</Text>
                  </Button>
                </V>
              </V>
            )}
          </Modal>

          <Modal animationType="slide" transparent={false} visible={modalColor}>
            <ColorPicker
              onColorSelected={color => this.setState({ color })}
              onColorChange={color => this.setState({ color: fromHsv(color) })}
              style={{ flex: 1 }}
            />
            <Button
              block
              info
              onPress={() => {
                this.setState({ modalColor: !modalColor })
              }}
            >
              <Text>Guardar</Text>
            </Button>
          </Modal>
        </View>
      </ScrollView>
    )
  }
}

export default connect(null, { agregarMateria })(FMateria)
