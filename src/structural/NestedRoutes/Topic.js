import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import topics from './topics-data.js'
import Resources from './Resources.js'


class Topic extends Component{
	
	render(){
		const topicID = this.props.match.params.topicID;
		const topic = topics.find(({id}) => id === topicID)
		return(
			<Container>
				<h1>{topic.name}</h1>
				<p>{topic.description}</p>
				<ul>
				{
					topic.resources.map((sub)=>
						<li key={sub.id}>
							<Link to={`/topics/${topicID}/${sub.id}`}>
								{sub.name}
							</Link>
						</li>
					)
				}
				</ul>
				<Route path={`/topics/:topicID/:subId`} component={Resources} />
			</Container>
		);
	}
}


export default Topic 