import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router'
import history from './history';
import route from './route'
import { Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux';

import App from './structural/App';
import store from './store'
//const store = createStore(reducer);
const target = document.querySelector('#root')


render(
  <Provider store={store}>
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
    </Provider>
  	,
  	target
)





