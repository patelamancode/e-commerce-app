import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductDataContext'

const WishList = () => {

  const { wishlistItem , wishlistItemCount , removeItemFromWishlist } = useContext(ProductDataContext)

  return (
    <div>
      <h2>Hey I am wishlist</h2>
      <p><b>Item :</b> {wishlistItemCount}</p>
      <ul>
        <ul>
        {wishlistItem.map((product)=>{
          const {id,name,description, quantity, category, brand} = product;
          return(
            <div key={id} 
             style={{border:'solid 2px black',
             borderRadius:'5px 10px',
             margin:'1rem',
             padding:'0.5rem'}}>
            <p><b>{name}</b></p>
            <p>{description}</p>
            <p><b>Quantity : </b>{quantity}</p>
            <p>{category}</p>
            <p>{brand}</p>
            <button onClick={() => removeItemFromWishlist(product)}>Remove Item</button>
        </div>
          )
        })}
        
        
      </ul>
      </ul>
    </div>
  )
}

export default WishList
