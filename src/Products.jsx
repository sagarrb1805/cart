import React from 'react'


import Product from './Product'

function Products({products, addtoCart}) {



  return (
    <div className='products'>
        {products.map((product) =>(
            <Product key={product.id} product={product} addtoCart={addtoCart}/>
        )
        )}
      
    </div>
  )
}

export default Products
