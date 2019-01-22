import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router'
import history from './history';
import route from './route'
import { Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

//import ApiDemo from './structural/ApiDemo'
//import NestedRoutes from './structural/NestedRoutes'
//import TodoApp from './structural/TodoApp';
import App from './structural/App';

const target = document.querySelector('#root')
render(
	<Router history={history}>
	<div>					
  		<App />
        {
        	route.map((singleRoute,key)=>(
        		<Route key={key} {...singleRoute} />
        	))
        }
        </div>
  	</Router>
  	,
  	target
)





