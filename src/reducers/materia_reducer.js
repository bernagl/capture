import { AGREGAR } from '../types'

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
    case AGREGAR:
      const { color, materia, profesor } = payload
      payload.dias.map(item => {
        let dia = state[item.dia]
        dia = [...dia, { ...item, materia, profesor, color }]
        state[item.dia] = dia
      })
      return { ...state }
    default:
      return state
  }
}
