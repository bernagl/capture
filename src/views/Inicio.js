import React, { Component } from 'react'
import { ListView, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Dias } from '../data'
import { FAB, Materia, View } from '../components'
import ViewWrapper from '../components/View'
import MateriaItem from '../components/MateriaItem'
import { hideHeader, showHeader } from '../actions'
import { H3, Button, Fab, List, ListItem, Text, SwipeRow } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

const diaNumero = new Date().getDay()
const dia = Dias[diaNumero]
const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho'
]

class Inicio extends Component {
  static navigationOptions = {
    title: dia,
    header: null
  }

  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      basic: true,
      listViewData: datas
    }
  }

  render() {
    const { materias } = this.props
    console.log(diaNumero, '-------------')
    console.log(materias[diaNumero])
    materias[diaNumero].sort(
      (a, b) => (a.inicio > b.inicio ? 1 : a.inicio < b.inicio ? -1 : 0)
    )
    return (
      <View noPadding>
        <ScrollView style={styles.main}>
          {/* {materias[3].map((materia, key) => (
            <Materia
              key={key}
              materia={materia}
              navigate={this.props.navigation.navigate}
            />
          ))} */}

          {materias[diaNumero].map((materia, key) => (
            <SwipeRow
              style={{ backgroundColor: 'white' }}
              leftOpenValue={75}
              rightOpenValue={-75}
              left={
                <Button danger onPress={() => alert('Trash')}>
                  <Icon
                    active
                    name="md-trash"
                    size={25}
                    style={{ color: 'white' }}
                  />
                </Button>
              }
              body={
                <MateriaItem
                  {...materia}
                  navigate={this.props.navigation.navigate}
                />
              }
              right={
                <Button info onPress={() => alert('Trash')}>
                  <Icon
                    active
                    name="ios-add-circle-outline"
                    size={25}
                    style={{ color: 'white' }}
                  />
                </Button>
              }
            />
          ))}

          {/* <List
            dataSource={this.ds.cloneWithRows(materias[diaNumero])}
            renderRow={data => <MateriaItem {...data} />}
            renderLeftHiddenRow={data => (
              <Button full onPress={() => alert(data.materia)}>
                <Icon active name="information-circle" />
              </Button>
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
              >
                <Icon active name="trash" />
              </Button>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
          /> */}
        </ScrollView>
        {/* <FAB navigate={this.props.navigation.navigate} /> */}
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          onPress={() => this.props.navigation.navigate('AgregarMateria')}
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

const mapDispatchToProps = ({ auth, materias }) => ({ auth, materias })

export default connect(mapDispatchToProps, { hideHeader, showHeader })(Inicio)

const styles = {
  // main: {
  //   padding: 5
  // }
}
