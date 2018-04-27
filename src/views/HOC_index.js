import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Dias } from '../data'
import { Materia } from '../components'
import ViewWrapper from '../components/View'
import { hideHeader, showHeader } from '../actions'

const dia = Dias[new Date().getDay()]
class Inicio extends Component {
  static navigationOptions = {
    title: dia,
    header: null
  }

  render() {
    const { materias } = this.props
    return (
      <ScrollView style={styles.main}>
        {materias.map((materia, key) => (
          <Materia key={key} materia={materia} />
        ))}
      </ScrollView>
    )
  }
}

const mapDispatchToProps = ({ auth, materias }) => ({ auth, materias })

export default connect(mapDispatchToProps, { hideHeader, showHeader })(Inicio)

const styles = {
  // main: {
  //   padding: 5
  // }
}
