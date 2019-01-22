import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Header, List, Menu } from 'semantic-ui-react'
class TodoApp extends Component {
	
	constructor(props){
		super(props);
		this.state = { items:[], text:'' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		this.setState({ text : e.target.value });
	}
	handleSubmit(e){
		e.preventDefault();
		if(!this.state.text.length){
			return;
		}
		const newItem = {
			text: this.state.text,
			id: Date.now()
		};
		this.setState(state => ({
			items: state.items.concat(newItem),
			text: ''
		}));
			
	}
	render(){
		return (
				<Segment placeholder>
      				
      				<Grid columns={1} relaxed='very' stackable>
        				<Grid.Column>

							<Header as='h2' textAlign='center'>Todo</Header>
							<Form onSubmit={this.handleSubmit}>
								<Form.Input
									icon='task' 
									iconPosition='left' 
									placeholder='Add your daily task' 
									id='new-todo'
									onChange={this.handleChange}
									value={this.state.text}
								/>
								<Button>Add #{this.state.items.length + 1}</Button>
							</Form>
							<TodoList items={this.state.items} />
        				</Grid.Column>
					</Grid>
				</Segment>
				
		);
	}
}

class TodoList extends Component{
	render(){
		return(
			<List as='ol'>
			{this.props.items.map(items => (
				<List.Item key={items.id} as='li' value='->'>{items.text}</List.Item>
			))}
			</List>
		);
	}
}


export default TodoApp;