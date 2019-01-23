import * as actions from './constants'
import history from '../../../history.js'
export function login(data){
	return function(dispatch){
		
		if(data.email !== null || data.password !== null){
			dispatch({
				type: actions.LOGIN_START,
				payload: "Please wait...."					
			})
		    const BASE_URL = 'http://139.59.87.122/modtod/beta/api';
		      const API = BASE_URL + '/auth/login'
		      fetch(API, {
		        method: 'POST',
		        headers: {
		          Accept: "application/json",
		          "Content-Type": "application/json",
		        },
		        body: JSON.stringify({ 
		          "email": data.email,
		          "password": data.password,
		          "device_token": data.device_token,
		          "os_type": data.os_type
		        })
		      }).then((response) => {
		      		dispatch({
						type: actions.LOGIN_USER_DETAILS,
						payload: "Fetching User Details...."
					})
		          return (response.ok) ? response.json() : '';
		      }).then( (data) => {
			      	dispatch({
						type: actions.LOGIN_SUCCESS,
						payload: data.data.authorization
					})
					history.push('/dashboard')
		      }).catch((err)=>{			
				dispatch({
					type: actions.LOGIN_ERROR,
					payload: err.message
				})			
			});
		}else{
			dispatch({
				type: actions.INVALID_PARAM,
				payload: "Email / Password Require...."
			})
		}

	}	
}