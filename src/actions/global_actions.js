import { HIDE_HEADER, SHOW_HEADER } from './types'

export const showHeader = dispatch => {
  dispatch({ type: SHOW_HEADER })
}

export const hideHeader = dispatch => {
  dispatch({ type: HIDE_HEADER })
}
