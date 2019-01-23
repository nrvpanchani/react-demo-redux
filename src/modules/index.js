import { combineReducers } from 'redux'
import authReducer from '../structural/actions/auth/reducer'

export default combineReducers({
  auth: authReducer
})