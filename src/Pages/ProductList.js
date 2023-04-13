import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import { ProductDataContext } from '../context/ProductDataContext';



const ProductList = () => {

    const { productData, isLoading, addItemToCart, addItemToWishlist } = useContext(ProductDataContext);


  return ( 
    <div>
      <h4>{isLoading && 'Loading...'}</h4>  
      <ul>
        {productData.map((productDataItem) => {
           
            return(   
            <div key={productDataItem.id}>
                <ProductCard {...productDataItem}/>
                <Link to={`/product/${productDataItem.id}`} style={{cursor:'pointer' , paddingRight: '20px'}} >View Detail</Link>
                <button style={{cursor:'pointer', paddingRight:'20px'}} onClick={() => addItemToCart(productDataItem)}>Add to 🛒</button>
                <button style={{cursor:'pointer'}} onClick={() => addItemToWishlist(productDataItem)}>Add to ❤️</button>
            </div>
        )})}
      </ul>
    </div>
  )
}

export default ProductList
