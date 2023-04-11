import React from 'react';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <h1>e-commerce</h1>
      <div>
        <NavLink style={{paddingRight: '1rem'}} to='/cart'>Cart</NavLink>
        <NavLink to='/wishlist'>Wishlist</NavLink>
      </div>
    </div>
  )
}

export default Navbar
