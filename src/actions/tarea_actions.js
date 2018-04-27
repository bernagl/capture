export const toggleTarea = tarea => dispatch => {
  dispatch({ type: 'toggle_tarea', payload: tarea })
}
