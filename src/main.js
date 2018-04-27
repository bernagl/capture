import React, { Component } from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import Aplicacion from './routes'
import { connect } from 'react-redux'

class Main extends Component {
  render() {
    const { header } = this.props.global
    return (
      <View
        style={[
          styles.container,
          { marginTop: Platform.OS === 'android' ? 0 : header ? 0 : 20 }
        ]}
      >
        <Aplicacion />
      </View>
    )
  }
}

const mapDispatchToProps = ({ global }) => ({ global })

export default connect(mapDispatchToProps)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
})
