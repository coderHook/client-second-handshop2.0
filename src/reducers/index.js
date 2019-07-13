import { combineReducers } from 'redux'
import advertisements from './advertisements'
import singleAd from './singleAdReducer'
import currentUser from './currentUserReducer'

export default combineReducers({
  currentUser,
  advertisements,
  singleAd
})