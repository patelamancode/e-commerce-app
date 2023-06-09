import React, { useContext, useState } from 'react'
import { ProductDataContext } from '../context/ProductDataContext';


const Cart = () => {
  const { cartItem , cartItemCount , removeItemFromCart } = useContext(ProductDataContext)
  // const [sameProductCount, setSameProductCount] = useState(1)
  // console.log(cartItem);

  
  let userSelectedItemQuantity = 1;
  // need to work

  const increaseSameItemCount = (item) =>{
    console.log(item.quantity);
    item.quantity -= 1;
    
  }
  const decreaseSameItemCount = (item) => {
      
  }
  // 



  return (
    <div>
      <h2>Hey I am cart</h2>
      <p><b>Item :</b> {cartItemCount}</p>
      <ul>
        {cartItem.map((product)=>{
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
            <div>
              <button style={{marginRight:'10px'}} onClick={() => increaseSameItemCount(product)}>+</button>
              <p>Selected Quantity : {userSelectedItemQuantity}</p>
              <button onClick={() => decreaseSameItemCount(product)}>-</button>
            </div>
            <button onClick={() => removeItemFromCart(product)}>Remove Item</button>
        </div>
          )
        })}
      </ul>
      <h2 style={{color:'red'}}>{(cartItemCount === null) && 'Opps !! No item in cart..'}</h2>
    </div>
  )
}

export default Cart
