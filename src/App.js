import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Navbarcustom from './Navbarcustom'
import Products from './Products';
import AddProduct from './AddProduct';

import Container from 'react-bootstrap/esm/Container';

import prod1 from './images/prod1.jpeg'
import prod2 from './images/prod2.jpeg'
import prod3 from './images/prod3.jpeg'



function App() {

const [addProduct, setAddProduct] = useState(false)
const [products, setProducts] = useState([
  {
    id:1,
    prodName:"Product 1",
    price:300,
    pdesc:"product 1 description",
    image:prod1
  },
  {
    id:2,
    prodName:"Product 2",
    price:200,
    pdesc:"product 2 description",
    image:prod2
  },
  {
    id:3,
    prodName:"Product 3",
    price:100,
    pdesc:"product 1 description",
    image:prod3
  }
])
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
