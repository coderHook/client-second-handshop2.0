import {GET_AD} from '../actions/actions'

const reducer = (state = null, action = {}) => {
  switch(action.type) {
    case GET_AD:
      return action.payload
    default:
      return state;
  }
}

export default reducer;