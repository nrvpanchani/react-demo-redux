import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'

import topics from './topics-data.js'



class Resources extends Component{
	
	render(){
		const topicID = this.props.match.params.topicID;
		const subID = this.props.match.params.subId
		
		const topic = topics.find(({id}) => id === topicID).resources.find(({id}) => id === subID )
		
		return(
			<Container>
				<h1>{topic.name}</h1>
				<p>{topic.description}</p>
				<a href={topic.url}>{topic.url}</a>
			</Container>
		);
	}
}


export default Resources 