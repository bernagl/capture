import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
import Main from './src/main'
import { store } from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
