import { combineReducers } from 'redux'
import advertisements from './advertisements'
import singleAd from './singleAdReducer'

export default combineReducers({
  advertisements,
  singleAd
})