import db from './firebase_config'
import { AGREGAR_MATERIA } from '../types'

export const agregarMateria = materia => async dispatch => {
  const dias = materia.dias.filter(dia => dia.checked)
  const payload = { ...materia, dias }
  const response = await db
    .collection('user')
    .doc('luis')
    .collection('materias')
    .add(payload)

  payload.id = response.id
  dispatch({ type: AGREGAR_MATERIA, payload })
}
