
let initialState = {
	auth: null
}

let reducer = (state = initialState, action) => {
	if(action.type  === 'AuthToken'){
	    return {
	      ...state,
	      auth : action.payload.val
	    }
  	}
	return {
	  ...state
	}
}

export default reducer;