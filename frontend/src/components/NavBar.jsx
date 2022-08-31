import React from 'react';
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles/navbar.css"

function NavBar() {
  return (
    <nav>
        <Link to="/" className='logo'>
        <h2>Shopify</h2>
        </Link>
        
         <Link to="cart" className='cart'>
        <div>
            <BsCart4  />
            <span className="items">
                <span>4</span>
            </span>
        </div>
        </Link>
    </nav>
  )
}

export default NavBar