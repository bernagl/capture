import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actualizarTarea, agregarTarea } from '../actions/tarea_actions'
import { Text, Textarea, Button, Picker, Icon, Toast } from 'native-base'
import DatePicker from 'react-native-datepicker'
import View from '../components/View'

export class AgregarTarea extends Component {
  static navigationOptions = {
    title: 'Agregar tarea'
  }

  state = { tarea: '', fecha: '', status: false, id: null, materia: '' }


  componentDidMount(){
    const { tarea } = this.props.navigation.state.params
    // console.log(this.props.navigation.state.params)
    tarea && this.setState({ ...tarea })
  }

  handleText = ( key, value ) => {
    this.setState({ [key]: value })
  }

  submit = async () => {
    const { id } = this.state
    // const { materia } = this.props.navigation.state.params
    const objTarea = { ...this.state }
    const response = await id ? this.props.actualizarTarea(objTarea):
     this.props.agregarTarea(objTarea)

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
    console.log(this.state)
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
          style={{ flex: 1, marginLeft: 5 }}
          date={fecha}
          mode="date"
          //   iconSource={Clock}
          placeholder="Fecha"
          confirmBtnText="Seleccionar"
          cancelBtnText="Cancel"
          // format="DD-MM-YYYY"
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
        <Button block info disabled={!tarea && true} onPress={this.submit} style={{ marginTop: 20 }}>
          <Text>Guardar</Text>
        </Button>
      </View>
    )
  }
}

export default connect(null, { actualizarTarea, agregarTarea })(AgregarTarea)
