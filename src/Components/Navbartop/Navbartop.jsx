import React, { useState } from 'react'
import './Navbartop.css'
import MAMALOGO from '../Navbartop/mamalogo.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbartop = () => {

    const [activeTab, setActiveTab] = useState('Home');


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
                          <Link to="/">
                          
                      <a href="#" className={activeTab === 'Home' ? 'active' : ''} onClick={() => handleTabClick('Home')}>
                      Home
                              </a>
                              </Link>        
                  </li>
                      <li>
                      <Link to="/dishes">
                      <a href="#" className={activeTab === 'Dishes' ? 'active' : ''} onClick={() => handleTabClick('Dishes')}>
                      Dishes
                              </a>     
                              </Link>
                  </li>
                      <li>
                      <Link to="/about">
                      <a href="#" className={activeTab === 'About' ? 'active' : ''} onClick={() => handleTabClick('About')}>
                      About Us
                              </a>     
                              </Link>
                  </li>
                      <li>
                      <Link to="/contact">
                      <a href="#" className={activeTab === 'Contact' ? 'active' : ''} onClick={() => handleTabClick('Contact')}>
                      Contact
                              </a>     
                              </Link>
                  </li>
                  <li>
                      <a href="#">
                     <MdOutlineShoppingCart className='cart'/>
                          </a>     
                  </li>
                  <li>
                      <a href="#">
              <button>Order now</button>
                          </a>     
                  </li>
              
                  </ul>
                  <div className={`pointer ${activeTab === 'Home' ? 'pointer-home' : activeTab === 'Dishes' ? 'pointer-dishes' : activeTab === 'About' ? 'pointer-about': activeTab === 'Contact' ? 'pointer-contact' : ''}`}></div>
                <div className="cart2"><MdOutlineShoppingCart/></div>
          </div>
    
          </div>
              </nav>
  )
}

export default Navbartop