import React, { useState } from 'react'



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProduct({onProdAdd}) {
    const [prodName, setProdName] = useState('')
    const [price, setPrice] = useState(0)
    const [pdesc, setPdesc] = useState('')
    const [image, setImage] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        onProdAdd({prodName, price, pdesc, image})

        setProdName("")
        setPdesc("")
        setPrice("")
        setImage("")


    }

  return (
    <div>
      <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Product Name" value={prodName} onChange={(e)=>setProdName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control as="textarea" rows={3} placeholder="Description" value={pdesc} onChange={(e)=>{setPdesc(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="file" onChange={(e)=>{setImage(e.target.value)}}/>
      </Form.Group>  
      
      <Button variant="primary" type="submit" >
        Add Product
      </Button>
    </Form>
    </div>
  )
}

export default AddProduct
