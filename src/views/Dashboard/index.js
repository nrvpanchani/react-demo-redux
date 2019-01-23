import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import history from '../../history'
import TopMenu from '../../components/TopMenu'
import {connect} from 'react-redux';
class Dashboard extends React.Component {
  
  constructor(props){
  	super(props);
    
    localStorage.setItem('authToken', this.props.token)
  }
  componentDidMount(){
    var token = localStorage.getItem('authToken')
    if(!token){
      history.push({ pathname: '/', state: { error: 'Login require' } })
    }
    console.log(token)
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

let mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(Dashboard);