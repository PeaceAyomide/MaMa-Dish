import React,{useState} from 'react';
import data from './data';
import './Dishes.css'

const Dishes = ({ foodItems, handleAddProduct }) => {

 

  return (
    <div className='foodcontainer'>
      {foodItems.map((foodItem) => (
        <div key={foodItem.id} className="foodcontainer2">
          <div className="blackcontainer">
          <div className="foodimg2">
            <img src={foodItem.image} alt={foodItem.name} className='imgfood'/>
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
