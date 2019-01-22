import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"

import Home from './Home.js'
import Topics from './Topics.js'

class NestedRoutes extends Component{
	render(){
		return(
			<div>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/topics'>Topics</Link></li>
				</ul>

				<Route exact path='/'  component={Home} />
				<Route path='/topics' component={Topics} />
			</div>
		);
	}
}

export default NestedRoutes