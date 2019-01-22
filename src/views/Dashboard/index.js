import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import history from '../../history'
import TopMenu from '../../components/TopMenu'
export default class Dashboard extends React.Component {
  
  constructor(props){
  	super(props);
  	const token = localStorage.getItem('token');
  	if(!token)
  		history.push({ pathname: '/', state: { error: 'Login require' } })
  }

  render() 
  {
    return (
      <Container>
	      <TopMenu />
        <Header as='h2'> Welcome </Header>
      </Container>
    )
  }
}