import React from 'react'


import {Container} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({product}) {
  return (
    <Container>
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} width="180px" height="180px" style={{background:"#e6fffa"}}/>
      <Card.Body>
        <Card.Title>{product.prodName}</Card.Title>
        <Card.Text>
          {product.pdesc}
        </Card.Text>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Button variant="success">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
    </Container>
  )
}

export default Product;