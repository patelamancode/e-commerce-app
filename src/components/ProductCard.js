import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({id, name, description, price}) => {
  return (
    <div>
      <div key={id} 
             style={{border:'solid 2px black',
             borderRadius:'5px 10px',
             margin:'1rem',
             padding:'0.5rem'}}>
            <p><b>{name}</b></p>
            <p>{description}</p>
            <p><b>Price : </b>{price}</p>
             <Link to={`/product/product${id}`} style={{cursor:'pointer'}}>View Detail</Link>
        </div>
    </div>
  )
}

export default ProductCard
