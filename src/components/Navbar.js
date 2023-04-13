import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductDataContext';


const Navbar = () => {

  const { cartItemCount, wishlistItemCount } = useContext(ProductDataContext) 

  return (
    <div>
      <h1>e-commerce</h1>
      <div>
        <NavLink style={{paddingRight: '1rem'}} to='/cart/:cartProductId'>Go to 🛒</NavLink><b>: {cartItemCount}</b><br/>
        <NavLink to='/wishlist'>Wishlist ❤️</NavLink><b>: {wishlistItemCount}</b>
      </div>
    </div>
  )
}

export default Navbar
