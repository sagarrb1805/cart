import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Container} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({product, addtoCart}) {
  return (

    <div className='product'>
        <Row><Col>
      <Card style={{width:'250px', height:'300px'}}>
      <Card.Img variant="top" src={product.image} width="30%" height="180px" style={{background:"#e6fffa", margin:"auto"}}/>
      <Card.Body>
        <Card.Title>{product.prodName}</Card.Title>
        <Card.Text>
          {product.pdesc}
        </Card.Text>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Button variant="success" onClick={()=>(addtoCart(product.id))}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col></Row>

    </div>

  )
}

export default Product;