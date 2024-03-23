import React, { useState, useEffect  } from 'react'
import './Navbar.css'
import { IoHomeOutline } from "react-icons/io5";
import { GiCookingPot } from "react-icons/gi";
import { GiCook } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Navbar = () => {


    const [activeItem, setActiveItem] = useState(localStorage.getItem('activeItem') || 'Home'); // State to keep track of the active item
    
    useEffect(() => {
      // Store activeTab in localStorage when it changes
      localStorage.setItem('activeItem', activeItem);
  }, [activeItem]);

   
   const handleClick = (itemName) => {
        if (activeItem !== itemName) { // Only update the active item if it's different from the clicked item
          setActiveItem(itemName); // Update the active item based on the clicked item
        }
      };
    


    return (
      <div>
      <div className="navigation">
          <ul>
              <li className={`list ${activeItem === 'Home' ? 'active' : ''}`}>
                        <Link to="/" onClick={() => handleClick('Home')}>
                      <span className='icon'><IoHomeOutline /></span> 
                     <span className='text'>Home</span> 
                  
                        </Link>
                        
              </li>
              <li className={`list ${activeItem === 'Dishes' ? 'active' : ''}`}>
                        <Link to="/dishes" onClick={() => handleClick('Dishes')}>
                        
                     <span className='icon'><GiCookingPot /></span> 
                     <span className='text'>Dishes</span> 
               
                        </Link>
                        
              </li>
              <li className={`list ${activeItem === 'About Us' ? 'active' : ''}`}>
                        <Link to="/about" onClick={() => handleClick('About Us')}>
                        
                     <span className='icon'><GiCook /></span> 
                     <span className='text'>Review</span> 
                 
                        </Link> 
              </li>
              <li className={`list ${activeItem === 'Contact' ? 'active' : ''}`} >
                        <Link to="/contact" onClick={() => handleClick('Contact')}>
                      
                     <span className='icon'><GrContact /></span> 
                     <span className='text'>Contact</span> 
                  
                        </Link>
                        
              </li>
                    <div className="indicator">
                        
          </div>
                </ul>
    </div>  
      
        </div>
    )
      }

export default Navbar