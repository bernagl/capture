import { AGREGAR_MATERIA } from '../types'

const INITIAL_STATE = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  0: []
}
export default function(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case AGREGAR_MATERIA:
      const { color, id, materia, profesor } = payload
      payload.dias.map(item => {
        let dia = state[item.dia]
        dia = [...dia, { ...item, id, materia, profesor, color }]
        state[item.dia] = dia
      })
      return { ...state }
    default:
      return state
    // return {
    //   1: [],
    //   2: [],
    //   3: [],
    //   4: [],
    //   5: [],
    //   6: [],
    //   0: []
    // }
  }
}
