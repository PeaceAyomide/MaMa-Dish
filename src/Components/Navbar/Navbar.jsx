import React, { useState } from 'react'
import './Navbar.css'
import { IoHomeOutline } from "react-icons/io5";
import { GiCookingPot } from "react-icons/gi";
import { GiCook } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Navbar = () => {


    const [activeItem, setActiveItem] = useState('Home'); // State to keep track of the active item
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
                        <Link to="/">
                        <a href="#" onClick={() => handleClick('Home')}>
                     <span className='icon'><IoHomeOutline /></span> 
                     <span className='text'>Home</span> 
                  </a>
                        </Link>
                        
              </li>
              <li className={`list ${activeItem === 'Dishes' ? 'active' : ''}`}>
                        <Link to="/dishes">
                        <a href="#" onClick={() => handleClick('Dishes')}>
                     <span className='icon'><GiCookingPot /></span> 
                     <span className='text'>Dishes</span> 
                  </a>
                        </Link>
                        
              </li>
              <li className={`list ${activeItem === 'About Us' ? 'active' : ''}`}>
                        <Link to="/about">
                        <a href="#" onClick={() => handleClick('About Us')}>
                     <span className='icon'><GiCook /></span> 
                     <span className='text'>Review</span> 
                  </a>
                        </Link> 
              </li>
              <li className={`list ${activeItem === 'Contact' ? 'active' : ''}`} >
                        <Link to="/contact">
                        <a href="#" onClick={() => handleClick('Contact')}>
                     <span className='icon'><GrContact /></span> 
                     <span className='text'>Contact</span> 
                  </a>
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