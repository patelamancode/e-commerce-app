import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductDataContext';


const Navbar = () => {

  const { cartItemCount, wishlistItemCount } = useContext(ProductDataContext) 

  return (
    <div>
      <h1>e-commerce</h1>
      <div style={{ justifyContent:'space-between'}}>
        <NavLink to='/products'>Product</NavLink>
        <div style={{marginLeft:'2rem'}}>
          <NavLink to='/cart/:cartProductId'>Go to 🛒</NavLink><b style={{paddingRight: '1rem'}}> {cartItemCount}</b>
        <NavLink to='/wishlist'>Wishlist ❤️</NavLink><b> {wishlistItemCount}</b>
        </div>
      </div>
    </div>
  )
}

export default Navbar
