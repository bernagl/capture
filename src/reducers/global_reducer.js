import { HIDE_HEADER, SHOW_HEADER } from '../actions/types'

const INITIAL_STATE = {
  header: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HIDE_HEADER:
      return { ...state, header: false }
    case SHOW_HEADER:
      return { ...state, header: true }
    default:
      return state
  }
}
