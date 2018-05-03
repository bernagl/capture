import React, { Component } from 'react'
import { connect } from 'react-redux'
import { agregarTarea } from '../actions/tarea_actions'
import { Text, Textarea, Button, Picker, Icon, Toast } from 'native-base'
import DatePicker from 'react-native-datepicker'
import View from '../components/View'

export class AgregarTarea extends Component {
  static navigationOptions = {
    title: 'Agregar tarea'
  }

  state = { tarea: '', fecha: '', status: false }

  handleText = ({ key, value }) => {
    this.setState({ [key]: value })
  }

  submit = async () => {
    const { status, tarea } = this.state
    const { id, materia } = this.props.navigation.state.params
    const response = tarea
      ? await this.props.agregarTarea({
          tarea,
          id_materia: id,
          materia,
          fecha,
          status
        })
      : Toast.show({
          text: 'Ingresa una tarea válida',
          buttonText: 'Ok',
          duration: 500
        })

    response &&
      (Toast.show({
        text: 'Tarea agregada',
        buttonText: 'Ok',
        duration: 500
      }),
      this.props.navigation.goBack())
  }

  render() {
    const { id, materia } = this.props.navigation.state.params
    const { tarea, fecha } = this.state
    console.log()
    return (
      <View>
        <Textarea
          rowSpan={5}
          bordered
          value={tarea}
          placeholder="Tarea..."
          onChangeText={tarea => this.handleText('tarea', tarea)}
        />
        <DatePicker
        //   style={{ flex: 1, marginLeft: 5 }}
          date={fecha}
          mode="date"
          //   iconSource={Clock}
          placeholder="Fecha"
          confirmBtnText="Seleccionar"
          cancelBtnText="Cancel"
        //   customStyles={{
        //     dateIcon: {
        //       position: 'absolute',
        //       left: 0,
        //       top: 4,
        //       marginLeft: 0
        //     },
        //     dateInput: {
        //       marginLeft: 36
        //     }
        //   }}
          onDateChange={date => {
            this.handleText('fecha', date)
          }}
        />
        <Button block info onPress={this.submit} style={{ marginTop: 20 }}>
          <Text>Guardar</Text>
        </Button>
      </View>
    )
  }
}

export default connect(null, { agregarTarea })(AgregarTarea)
