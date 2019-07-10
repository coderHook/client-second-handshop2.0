import { GET_ADS, GET_AD, DEL_AD } from '../actions/actions'
import { UPDATE_AD } from '../actions/adminActions'

export const reducer = (state = null, action = {}) => {
  switch(action.type){
    case GET_ADS:
      return action.payload;
    case GET_AD:
      return action.payload
    case UPDATE_AD:
      return state.filter(ad => ad.id !== action.payload.id).concat(action.payload);
    case DEL_AD:
      return state.filter(ads => ads.id !== action.payload)
    default:
      return state;
  }
}

export default reducer