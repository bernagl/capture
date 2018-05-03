import { AGREGAR } from '../types'

export const agregarMateria = materia => dispatch => {
  const dias = materia.dias.filter(dia => dia.checked)
  // console.log({ ...materia, dias })
  dispatch({ type: AGREGAR, payload: { ...materia, dias } })
}
