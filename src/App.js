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

useEffect( ()=>{
  const getProducts = async()=>{
    const res = await fetch("http://localhost:6001/products")
    console.log(res)
    const data = await res.json()
    // console.log(data)
    setProducts(data)
    
  }
  getProducts()

}, [])


  const onProdAdd = (product)=>{

    setProducts([...products, product])
  }
  const onAdd = ()=>{
    setAddProduct(!addProduct)
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
      <Products products={products}></Products>
      </div>
    
      
    </div>
  );
}

export default App;
