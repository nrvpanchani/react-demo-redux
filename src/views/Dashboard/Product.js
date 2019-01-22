import React from 'react'
import { Container } from 'semantic-ui-react'
import TopMenu from '../../components/TopMenu'
import ProductData from '../../components/ProductData'
export default class Product extends React.Component {

  render() 
  {
    return (
      <Container>
	      <TopMenu />
        <ProductData />
      </Container>
    )
  }
}