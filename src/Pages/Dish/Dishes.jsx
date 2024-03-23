import React,{useState, useEffect } from 'react';
import data from './data';
import './Dishes.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dishes = ({ foodItems, handleAddProduct }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true 
    });
  }, []);

  return (
    <div className='foodcontainer'>
      {foodItems.map((foodItem) => (
        <div key={foodItem.id} className="foodcontainer2">
          <div className="blackcontainer" data-aos="fade-up">
          <div className="foodimg2">
          <img
          src={foodItem.image}
          alt={foodItem.name}
          className='imgfood'
          />
            </div>
          
            <div className="pricefood">
              <div className="foodwrite">
              <h4>{foodItem.name}</h4>
            <p>${foodItem.price}</p>
              </div>
            <div className="btnfood">
            <button>Order</button>
            <button onClick={() => handleAddProduct(foodItem)}>Add To Cart</button>
          
            </div>
            </div>  
         </div>
          
      
          </div>
          ))}
    </div>
  );
};


export default Dishes;
