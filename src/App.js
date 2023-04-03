import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Navbarcustom from './Navbarcustom'
import Products from './Products';

import prod1 from './images/prod1.jpeg'
import prod2 from './images/prod2.jpeg'
import prod3 from './images/prod3.jpeg'



function App() {

  
const [products, setProducts] = useState([
  {
    id:1,
    prodName:"Product 1",
    price:300,
    image:prod1
  },
  {
    id:2,
    prodName:"Product 2",
    price:200,
    image:prod2
  },
  {
    id:3,
    prodName:"Product 3",
    price:100,
    image:prod3
  }
])


  return (
    <div className="App">
      <Navbarcustom/>
      <header className="App-header">
      <Products products={products}></Products>
      </header>
    </div>
  );
}

export default App;
