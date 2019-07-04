import { GET_ADS, GET_AD } from '../actions/actions'

export const reducer = (state = null, action = {}) => {
  switch(action.type){
    case GET_ADS:
      return action.payload;
    case GET_AD:
      return action.payload
    default:
      return state;
  }
}

export default reducer