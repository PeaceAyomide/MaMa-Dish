import React, {useState} from 'react'
import './cart.css'
import { IoMdCloseCircleOutline } from "react-icons/io";

const cart = ({handleClosebutton, cartfoodItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {

  const totalPrice = cartfoodItems.reduce((price, item) => price + item.quantity * item.price, 0)

  return (
    
    <div className='cartdisplay'>
      <div className="cartdisplay2">
        <div className="cartdisplay-heading">
          <h4>ADDED TO CART <IoMdCloseCircleOutline onClick={handleClosebutton} className='closeicon' /></h4>
                   
        </div>
        <div className="cartcontent">
        {cartfoodItems.length === 0 && (
        <div className="cart-items-empty">
          No Food Were Added
        </div>
          )}

           {cartfoodItems.map((item) => (
          <div key={item.id} className='cart-items-list'>
            <div className="cart-items-img">
            <img src={item.image} alt={item.name} />
              
</div>
            <div className='cart-items-name'>
             {item.name} 
            </div>
            <div className="cart-items-functions">
              <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>
              <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * ${item.price}
            </div>
          </div>
          
        ))}
        </div>
        <div className="cart-items-total-price-name">
        Total Price:
        <div className="cart-items-total-price">
          ${totalPrice}
        </div>
      </div>
      </div>
    </div>
  )
}

export default cart