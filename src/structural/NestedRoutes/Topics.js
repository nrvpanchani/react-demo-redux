import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Topic from './Topic.js'
import topics from './topics-data.js'

class Topics extends Component{
	render(){
		return(
			<Container>
				<h1>Topics</h1>
				<ul>
				{
					topics.map(({name, id}) =>
						<li key={id}>
							<Link to={`/topics/${id}`}>{name}</Link>
						</li>
					)
				}
				</ul>
				<Route path='/topics/:topicID' component={Topic} />
			</Container>
		);
	}
}

export default Topics