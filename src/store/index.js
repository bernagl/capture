import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import reducers from '../reducers'

const persistConfig = {
  key: 'cappture',
  storage: AsyncStorage,
  whiteList: ['materias']
}

const persistReducers = persistReducer(persistConfig, reducers)

// export default () => {
let store = createStore(persistReducers, {}, applyMiddleware(compose(thunk)))
let persistor = persistStore(store)
export { persistor, store }
//   return { persistor, store }
// }
// export default createStore(reducers, {}, applyMiddleware(compose(thunk)))
