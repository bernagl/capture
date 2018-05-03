import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Main from './src/main'
import { persistor, store } from './src/store'
import { Root } from 'native-base'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <Main />
          </Root>
        </PersistGate>
      </Provider>
    )
  }
}
