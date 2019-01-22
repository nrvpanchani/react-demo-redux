import React, { Component } from 'react'
import { Icon, Header, Button, Form, Grid, Segment } from 'semantic-ui-react'
import history from '../../history'

const BASE_URL = 'http://139.59.87.122/modtod/beta/api';

class Login extends Component {
    
  constructor(props){
    super(props)
    this.state = {
      email : null,
      password : null,
      device_token: null,
      os_type: null
    }
    
    localStorage.clear();
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleInputChange = (e,{name,value})=>{
    this.setState({
      [name]: value 
    });
  }
  handleSignUp = () => {
    const { email, password } = this.state
    const device_token = 'abcdeeeeeffffffgggghhhh'
    const os_type = 1
    const API = BASE_URL + '/auth/login'

    if(email == null || password == null || device_token == null || os_type == null){
      this.setState({error: 'Email / Password require'})
    }
    else{
      fetch(API, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          "email": email,
          "password": password,
          "device_token": device_token,
          "os_type": os_type
        })
      }).then((response) => {
          return (response.ok) ? response.json() : '';
      }).then( (data) => {
        //console.log(data.data)
          localStorage.setItem('user_data',JSON.stringify(data))
          localStorage.setItem('token',data.data.authorization);
          history.push('/dashboard')
      });
   }
  }
  render() {
  	const { error } = this.state
    return (
      <Segment placeholder>
      <Grid container  columns={1} relaxed='very' stackable>
        <Grid.Column>
          <Header as='h2' icon textAlign='center'>
            <Icon name='lock' circular />
            <Header.Content>Sign In</Header.Content>
          </Header>
          <center>
            { error ? error : '' }
          </center>
          <Form className='ui form segment' onSubmit={this.handleSignUp}>
            <Form.Input 
              label='Email' 
              name='email' 
              placeholder='Email'
              type='email' 
              onChange={this.handleInputChange}
            />
            
            <Form.Input 
              label='Password' 
              name='password' 
              type='password'
              placeholder='Password' 
              onChange={this.handleInputChange} />
            
            <Button type='submit' content='Login' primary />
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
    );
  }
}
export default Login;



