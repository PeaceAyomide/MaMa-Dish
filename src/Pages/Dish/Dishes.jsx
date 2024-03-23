import React,{useState, useEffect } from 'react';
import data from './data';
import './Dishes.css'
import { Blurhash } from 'react-blurhash';
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
          <ImageWithBlurhash foodItem={foodItem} />
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


const ImageWithBlurhash = ({ foodItem }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = foodItem.image;

    return () => {
      img.onload = null; // Clear the onload event handler to avoid memory leaks
    };
  }, [foodItem.image]);

  return (
    <div style={{ borderRadius: '20rem', overflow: 'hidden', marginRight: '-20px' }}>
      {!imageLoaded && (
        <Blurhash
          hash='LGJu7IN|23rW%#ogxtRjT#wa8wOY'
          width={101}
          height={101}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && (
        <img
          src={foodItem.image}
          alt={foodItem.name}
          className='imgfood'
          style={{ display: !imageLoaded ? 'none' : 'inline' }}
        />
      )}
    </div>
  );
};


export default Dishes;
