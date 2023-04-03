import React from 'react'




import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({product}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.prodName}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Button variant="success">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product;