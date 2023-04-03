import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Navbarcustom from './Navbarcustom'
import Products from './Products';
import AddProduct from './AddProduct';

import Container from 'react-bootstrap/esm/Container';

import prod1 from './images/prod1.jpeg'
import prod2 from './images/prod2.jpeg'
import prod3 from './images/prod3.jpeg'



function App() {

const [addProduct, setAddProduct] = useState(false)
const [products, setProducts] = useState([])
const [cartProducts, setCartProducts] = useState([])

useEffect( ()=>{
  const getProducts = async()=>{
    const res = await fetch("http://localhost:6001/products")
    console.log(res)
    const data = await res.json()
    // console.log(data)
    setProducts(data)
    return data
    
  }
  getProducts()

}, [])


  const onProdAdd = async (product) =>{

    const res = await fetch("http://localhost:6001/products", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
      
    }
    )
    // console.log(await res.json())

    setProducts([...products, product])
  }
  const onAdd = ()=>{
    setAddProduct(!addProduct)
  }

  const addtoCart = async (id)=>{
    const res = await fetch( `http://localhost:6001/products/${id}`)
    console.log(res)
    const data = await res.json()

    const resCart = await fetch(`http://localhost:6001/cartedProducts/${id}`)
    
    const dataCart = await resCart.json()
    console.log(dataCart)
    if(Object.keys(dataCart).length !== 0){
      // console.log(dataCart.count)
      dataCart.count = dataCart.count + 1
      // console.log(dataCart.count)

      const resput = await fetch(`http://localhost:6001/cartedProducts/${id}`, {
       method: 'PUT',
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(dataCart)

    })

    }else{
      
      data.count = 1
      // data = [...data, count]
      const respush = await fetch("http://localhost:6001/cartedProducts", {
       method: 'POST',
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(data)

    })
  }

    // dataCart.filter((data)=>{

    // })
    // if (data === )
    // console.log(data)
    // console.log(data)
    
    // const respush = await fetch("http://localhost:6001/cartedProducts", {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
      
    // }
    // )
    // setCartProducts(...cartProducts, data)

    // console.log(data)
    // console.log(id)
  }

  return (
    <div className="App" style={{background:"#e6ffee"}}>

      <div className='custom-nav'>
        <Navbarcustom onAdd={onAdd}/>
        </div>
        <div>
          {addProduct && <AddProduct onProdAdd={onProdAdd}></AddProduct>}
      
      </div>

        <div className='cont'>
      <Products products={products} addtoCart={addtoCart}></Products>
      </div>
    
      
    </div>
  );
}

export default App;
