import React from 'react'
import {Link} from 'react-router-dom'
import {  Menu } from 'semantic-ui-react'
import history from '../../history' 

export default class TopMenu extends React.Component {
  state = { activeItem: 'Dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  logOut = () => {
    this.setState({ authToken: null, error: null, message: null })
    localStorage.clear();
    history.push('/')
  }
  render() 
  {
    const { activeItem } = this.state
    return (
      <Menu secondary>
        <Menu.Item 
          as={Link}
          to='/dashboard'
          name='Dashboard' 
          active={activeItem === 'Dashboard'} 
          onClick={this.handleItemClick} />
        <Menu.Item
          as={Link}
          to='/dashboard/product'
          name='Product'
          active={activeItem === 'Product'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.logOut}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}