import React from 'react';
import "./styles/cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className='cart-container'>Cart

      <h1 className= "cart-heading">Shopping Cart</h1>

      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>

          <button className='ripple start-shopping'>
            <Link to="/">
              <BsArrowLeft />
              Start Shopping
            </Link>
          </button>
        </div>

      ) : (
        <div className="cart-table">
          <table>
            <thead>
              <th className='p-header'>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </thead>

            <tbody>
              {cart.cartItems?.map (cartItem => (
                <tr key={cartItem.id} className="red">
                  <td className='product'>
                   <div> <img src={cartItem.image} alt={cartItem.name}/></div>
                    <div className="product-details">
                      <h3>{cartItem.name}</h3>
                      <h4>{cartItem.desc}</h4>
                      <p>Remove <RiCloseCircleLine /> </p>
                    </div>
                  </td>

                  <td className='table-data-2'>₦{cartItem.price.toLocaleString()}</td>

                  <td className='table-data-2'>
                    <div className="quantity-counter">
                      <button>-</button>
                      <span>{cartItem.itemQuantity}</span>
                      <button>+</button>
                    </div>
                  </td>


                  <td className='table-data-2'>
                  {(() => {
                    const total = cartItem.price * cartItem.itemQuantity;
                    return `₦${total.toLocaleString()}`;
        
                  })()}
                  </td>
                </tr>
              ))}
            </tbody>
           
          </table>
          <div className="cart-summary">
            <span>Clear Cart</span>
            <div className="cart-summary-right">
              <div className="subtotal">
                <h4>Subtotal</h4>
                <h3>₦100,000</h3>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className='ripple start-shopping'>Check out</button>
              <button className='continue-shopping'>
            <Link to="/">
              <BsArrowLeft />
              Continue Shopping
            </Link>
          </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Cart