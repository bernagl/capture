import { ACTUALIZAR_TAREA, AGREGAR_TAREA } from '../types'

export default function(state = [], { payload, type }) {
  switch (type) {
    case AGREGAR_TAREA:
      return [...state, payload]
    case ACTUALIZAR_TAREA:
    const newState = state.map((tarea) => tarea.id === payload.id ? payload : tarea )
      return newState
    // case 'toggle_tarea':
    //   return state.map(
    //     tarea =>
    //       tarea.id === payload.id ? { ...tarea, status: !tarea.status } : tarea
    //   )
    default:
      return state
  }
}
