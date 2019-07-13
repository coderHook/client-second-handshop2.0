import { SET_USER } from './../actions/actions'

const initialState = null

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_USER:
    return payload

  default:
    return state
  }
}
