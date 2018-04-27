export default function(state = null, action) {
  switch (action.type) {
    case 'toggle_tarea':
      return state.map(
        tarea =>
          tarea.id === action.payload.id
            ? { ...tarea, status: !tarea.status }
            : tarea
      )
    default:
      return [
        {
          id: '1',
          materia: 123,
          nombre: 'Hacer la investigación del tema 1',
          fecha: '2018-04-11',
          status: false
        },
        {
          id: '2',
          materia: 123,
          nombre: 'Hacer la investigación del tema 1',
          fecha: '2018-04-11',
          status: true
        }
      ]
  }
}
