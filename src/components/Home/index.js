import React, { Component } from 'react'
import { Button, Form, Grid, Segment, Header } from 'semantic-ui-react'

export default class Home extends Component {

	constructor(props){
		super(props)
		this.state = {
			username : '',
			password : ''
		}
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
	}
	handleUsername(text){
		this.setState(username: text.target.value)
	}
	handlePassword(text){
		this.setState(password: text.target.value)
	}
	handleSignUp(){
		console.log(this.state.username+" "+this.state.password)
	}
	render() {
		return (
			<Segment placeholder>
		      <Grid columns={1} relaxed='very' stackable>
		        
		        <Grid.Column>
		        <Header as='h2'>Sign In</Header>
		          <Form className='ui form segment' onSubmit={this.handleSignUp}>
		            <Form.Input label='Username' id='username' name='username' placeholder='Username' onChange={ (text) => {this.handleUsername(text)} } />
		            <Form.Input label='Password' id='password' name='password' placeholder='Password' onChange={ (text) => {this.handlePassword(text)} } />

		            <Button type='submit' content='Add' primary onClick={this.handleSignUp} />
		          </Form>
		        </Grid.Column>

		      </Grid>
    		</Segment>
		);
	}
}
