import React, { Component } from 'react'
import { Icon, Header, Button, Form, Grid, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { login } from '../../structural/actions/auth'

class Login extends Component {
     
  constructor(props){
    super(props)
    this.state = {
      email : null,
      password : null,
      device_token: null,
      os_type: null,
    }
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleInputChange = (e,{name,value})=>{
    this.setState({
      [name]: value,
      device_token:'abcdeeeeeffffffgggghhhh',
      os_type:1 
    });
  }
  handleSignUp = () => {
    this.props.actions.login(this.state)
  }
  render() {
    return (
      <Segment placeholder>
      <Grid container  columns={1} relaxed='very' stackable>
        <Grid.Column>
          <Header as='h2' icon textAlign='center'>
            <Icon name='lock' circular />
            <Header.Content>Sign In</Header.Content>
          </Header>
          <center>
            {this.props.error}
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

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      login: (payload: Object) => dispatch(login(payload)), 
    }
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    token: state.auth.token,
    message: state.auth.message,
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))
