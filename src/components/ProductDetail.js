import React from 'react';
import { useParams } from 'react-router';
import ProductCard from './ProductCard';


const ProductDetail = () => {
    const { id } = useParams()

    const showSelectedProduct = (productData, clickedId) =>{
       return productData.find((product) => product.id === id )
    }
    // need to create context for sharing main data to all child App comp
    const selectedProduct = showSelectedProduct("need to put data")

  return (
    <div>
        <ProductCard {...selectedProduct} />
    </div>
  )
}

export default ProductDetail
