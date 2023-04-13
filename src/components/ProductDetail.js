import React, { useContext } from 'react';
import { useParams } from 'react-router';
import ProductCard from './ProductCard';
import { ProductDataContext } from '../context/ProductDataContext';


const ProductDetail = () => {
    const { productId } = useParams()
    const { productData } = useContext(ProductDataContext);

    const showSelectedProduct = (productData, clickedId) =>{
       return productData.find((product) => product.id === +clickedId )
    }
    const selectedProduct = showSelectedProduct(productData, productId)

  return (
    <div>
        <h2>Product detail page</h2>
        <ProductCard {...selectedProduct} />
    </div>
  )
}

export default ProductDetail
