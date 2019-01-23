import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {  Divider, Header,Container,  Image, Table, Pagination, Button } from 'semantic-ui-react'
import history from '../../history'
import {connect} from 'react-redux';


class ProductData extends Component {
	constructor(props){
		super(props);
		this.state = {
			productData : [],
			error : '',
			loading: false,
			authToken: this.props.token
		}
	}
	componentDidMount(){
		
    	var token = localStorage.getItem('authToken')
    	if(!token){
      		history.push({ pathname: '/', state: { error: 'Login require' } })
    	}
    	console.log(token)
    	const BASE_URL = 'http://139.59.87.122/modtod/beta/api';

		const API = BASE_URL + '/product/productListings'
		fetch(API, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization : `bearer ${token}`
        }
      }).then((response) => {
          return (response.ok) ? response.json() : '';
      }).then( (productData) => {
        this.setState({ productData:productData.data }) 
      });
	}
	render() {
		var {productData , error} = this.state
		return (
			<Container>
				<Header size='large'>{ error ? '404 : Data Not Found' : 'Products'}</Header>
				<Divider />
				
				<Table basic='very' celled collapsing textAlign='center'>

				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell>Name</Table.HeaderCell>
				        <Table.HeaderCell>Image</Table.HeaderCell>
				        <Table.HeaderCell>Price</Table.HeaderCell>
				        <Table.HeaderCell>Item Status</Table.HeaderCell>
				        <Table.HeaderCell>View</Table.HeaderCell>

				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {
				    	productData.map( (data) => (	
					   		
					      <Table.Row key={data.id} title={data.id}>
					      	
					        <Table.Cell>
					        <Header as='h4' image>
					            <Header.Content>
					              { data.title }
					              <Header.Subheader>{ data.description }</Header.Subheader>
					            </Header.Content>
					          </Header>
					        </Table.Cell>
					        
					        <Table.Cell>
					        	<Image src={data.images[0].url} rounded size='medium' />
					        </Table.Cell>

					        <Table.Cell>{ data.price } /-</Table.Cell>
					        <Table.Cell>
					        	{ data.in_cart ? 'In stock' : 'Out of stock' }
					        </Table.Cell>
					        <Table.Cell>

					        	<Button as={Link} to={{ pathname: '/dashboard/product/viewProduct', state: { productId: data.id} }} circular icon='info' />
					        </Table.Cell>
					      </Table.Row>
				      ))
				    }
				    
				     
				    </Table.Body>
			  </Table>
				<Pagination defaultActivePage={5} totalPages={productData.length} />
			</Container>
		);
	}
}

let mapStateToProps = (state) => {
  return {
  token: state.auth.token,
  };
};
export default connect(mapStateToProps)(ProductData);