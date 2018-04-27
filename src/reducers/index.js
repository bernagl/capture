import { combineReducers } from 'redux'
import materias from './materia_reducer'
import tareas from './tarea_reducer'
import global from './global_reducer'

export default combineReducers({ auth: () => ({}), global, materias, tareas })
