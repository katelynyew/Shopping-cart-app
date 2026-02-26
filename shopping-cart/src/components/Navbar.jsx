import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const cartItems = useSelector(state => state.cart.items)
  return (
    <nav>
        <h1>Shopping Cart</h1>
        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart ({cartItems.length})</Link>
        </div>
    </nav>
  )
}

export default Navbar