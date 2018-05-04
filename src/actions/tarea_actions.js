import db from './firebase_config'
import { ACTUALIZAR_TAREA, AGREGAR_TAREA } from '../types'

export const toggleTarea = tarea => async dispatch => {
  // const response = db
  //   .collection('user')
  //   .doc('luis')
  //   .collection('tareas')
  //   .add({ tarea })
  // const payload = { ...tarea, id: response.id }
  tarea.status = !tarea.status
  console.log(tarea)
  actualizarTarea(tarea)
  // dispatch({ type: 'toggle_tarea', payload: tarea })
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

export const actualizarTarea = tarea => async dispatch => {
  console.log(tarea)
  const response = await db
    .collection('user')
    .doc('luis')
    .collection('tareas')
    .doc(tarea.id)
    .set(tarea)
  // const payload = { ...tarea, id: response.id }
  dispatch({ type: ACTUALIZAR_TAREA, payload: tarea })
  return tarea
}
