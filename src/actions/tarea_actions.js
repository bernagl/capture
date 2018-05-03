import db from './firebase_config'
import { AGREGAR_TAREA } from '../types'

export const toggleTarea = tarea => async dispatch => {
  // const response = db
  //   .collection('user')
  //   .doc('luis')
  //   .collection('tareas')
  //   .add({ tarea })
  // const payload = { ...tarea, id: response.id }
  dispatch({ type: 'toggle_tarea', payload: tarea })
}

export const agregarTarea = tarea => async dispatch => {
  const response = await db
    .collection('user')
    .doc('luis')
    .collection('tareas')
    .add({ tarea })
  const payload = { ...tarea, id: response.id }
  dispatch({ type: AGREGAR_TAREA, payload })
  return payload
}
