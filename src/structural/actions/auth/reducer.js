import Immutable from 'seamless-immutable'
import * as actions from './constants'

let initialState = Immutable({
	token: null,
	message: null,
	error: null
})

function authReducer (state: Object = initialState, action:{ type: string, payload: any }) {
	
	switch (action.type) {
		case actions.INVALID_PARAM:
			return state.setIn(['error'], action.payload)
		case actions.LOGIN_START:
			return state.setIn(['message'], action.payload)
		case actions.LOGIN_USER_DETAILS:
			return state.setIn(['message'], action.payload)
		case actions.LOGIN_SUCCESS:
			return state.setIn(['token'], action.payload)
		case actions.LOGIN_ERROR:
			return state.setIn(['message'], action.payload)
		default:
			return state
	}
}


export default authReducer;