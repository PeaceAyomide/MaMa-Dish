import React, { useState, useEffect } from 'react'
import './Navbartop.css'
import MAMALOGO from '../Navbartop/mamalogo2.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbartop = ({ handlebutton, cartfoodItems }) => {

    const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || 'Home');
    
    useEffect(() => {
        // Store activeTab in localStorage when it changes
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    
  return (
      <nav>
          <div className="navyz">
          <div className="logoimg">
              <img src={MAMALOGO} alt="" />
          </div>

          <div className="navlist">
              <ul>
                      <li>
                          <Link to="/"  className={activeTab === 'Home' ? 'active' : ''} onClick={() => handleTabClick('Home')}>
                          
                     
                      Home
                             
                              </Link>        
                  </li>
                      <li>
                      <Link to="/dishes" className={activeTab === 'Dishes' ? 'active' : ''} onClick={() => handleTabClick('Dishes')}>
                      
                      Dishes
                               
                              </Link>
                  </li>
                      <li>
                      <Link to="/about" className={activeTab === 'About' ? 'active' : ''} onClick={() => handleTabClick('About')}>
                      
                      Review Us
                               
                              </Link>
                  </li>
                      <li>
                      <Link to="/contact" className={activeTab === 'Contact' ? 'active' : ''} onClick={() => handleTabClick('Contact')}>
                      
                      Contact
                              </Link>
                  </li>
                      <li>
                          <Link> 
                         
                     <MdOutlineShoppingCart className='cart' onClick={handlebutton}/>
                        <span className='span'> {cartfoodItems.length === 0 ? "" : cartfoodItems.length}</span>
                         
                          </Link>
                       </li>
                  <li>
                      <a href="#">
              <button>Booking Now</button>
                          </a>     
                  </li>
              
                  </ul>
                  <div className={`pointer ${activeTab === 'Home' ? 'pointer-home' : activeTab === 'Dishes' ? 'pointer-dishes' : activeTab === 'About' ? 'pointer-about': activeTab === 'Contact' ? 'pointer-contact' : ''}`}></div>
                <div className="cart2"><MdOutlineShoppingCart onClick={handlebutton}/></div>
                <span className='span2'> {cartfoodItems.length === 0 ? "" : cartfoodItems.length}</span>
              </div>
    
          </div>
              </nav>
  )
}

export default Navbartop