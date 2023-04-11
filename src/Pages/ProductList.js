import { useState , useEffect } from 'react';
import React from 'react'
import { fakeFetch } from './DataBase';
import ProductCard from '../components/ProductCard';



const ProductList = () => {

    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false);

    const dataFromServer = async () =>{
        setIsLoading(true)
        try{
            const dataResponse = await fakeFetch('https://example.com/api/products');
            if(dataResponse.status === 200){
                setIsLoading(false)
                setProductData(dataResponse.data.products)
            }
        }
        catch(error){
            if(error.status === 404){
                setError(true)
            }
        }
    }
    useEffect(()=>{
        dataFromServer();
    }, [])

    

  return (
    <div>
      <h4>{isLoading && 'Loading...'}</h4>  
      <ul>
        {productData.map((productData) => <ProductCard {...productData}/>)}
      </ul>
    </div>
  )
}

export default ProductList
