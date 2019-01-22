import React from 'react'
import { Container, Header, Image, Label, Icon, Card, Feed, Grid, Button, Rating } from 'semantic-ui-react'
import TopMenu from '../../components/TopMenu'
import history from '../../history'
import moment from 'moment'
const BASE_URL = 'http://139.59.87.122/modtod/beta/api'

export default class ViewProduct extends React.Component {

   constructor(props) {
    super(props)
    this.state = {
      productData : {},
      productImage: '',
      userDetail: {},
      attributes: []

    }
    const token = localStorage.getItem('token');
    if(!token)
      history.push({ pathname: '/', state: { error: 'Login require' } }) 
  }
  componentDidMount(){
    const token = localStorage.getItem('token');
    const productId = this.props.location.state.productId

    const API = BASE_URL + '/product/detail/' + productId
    fetch(API, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization : `bearer ${token}`
        }
      }).then((response) => {
          return (response.ok) ? response.json() : '';
      }).then( (productData) => {
        this.setState({ 
          productData:productData.data, 
          productImage: productData.data.images[0].url,
          userDetail: productData.data.user,
          attributes: productData.data.attributes
        })
        console.log(productData.data)
      });

  }

  render() 
  {
    var { productData, productImage, userDetail, attributes } = this.state
    return (
      <Container>
        <TopMenu />
        <Header size='large'>{ productData.title }</Header>
        <Grid>
          <Grid.Row>
            
            <Grid.Column width={8}>
              <Image src={productImage} size='medium' bordered rounded/>
              <Header size='small'>Price 
                <Label as='a' color='red' image>
                  <Icon name='rupee' />{ productData.price }
                </Label>
              </Header>
              <Header size='small'>Detail : { productData.description }</Header>
              <Header size='small'>
                Postal Code : {productData.postal_code}
              </Header>
              <Header>
                <Rating icon='star' size='huge' defaultRating={productData.user_rating} maxRating={4} />
              </Header>
            </Grid.Column>


            <Grid.Column width={8}>
              <Header>Attributes</Header>
              {
                attributes.map( (data) => (
                  <Label key={data.id}>{ data.name }</Label>
                ))
              }
              <Header>
              {
                (productData.is_fav) ? <Button><Icon name='heart' color='red' /> Fav</Button> : <Button><Icon name='heart outline' color='red' /> Add to Fav</Button>
              }{
                (productData.in_cart) ? <Button><Icon name='arrow down cart' /> Added to cart</Button> : <Button><Icon name='cart' /> Add to cart</Button>
              }</Header>
            </Grid.Column>

            <Grid.Column floated='right' width={4}>
              <Button color='red'>Shop Now! <Icon name='arrow right' /></Button>
            </Grid.Column>

          </Grid.Row>
        </Grid>

        <br/>




        <span>
          <Card fluid centered>
            <Card.Content>
              <Card.Header>{ userDetail.first_name } {userDetail.last_name}</Card.Header>
            </Card.Content>
            <Card.Content>
              <Feed>

                <Feed.Event>
                  <Feed.Label image={userDetail.profile_image} />
                  <Feed.Content>
                      
                      <Feed.Date content={moment(productData.created_at, "YYYYMMDD").fromNow()}  />
                    
                    <Feed.Summary>
                      <div>Mail <a href={userDetail.email}>{userDetail.email}</a></div>
                      Bank <a href={ userDetail.default_bank }>{ userDetail.default_bank }</a>
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
            
              </Feed>
            </Card.Content>
          </Card>
        </span>

      </Container>
    )
  }
}