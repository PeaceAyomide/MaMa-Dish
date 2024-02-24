import React, { useState } from 'react'
import './Navbartop.css'
import MAMALOGO from '../Navbartop/mamalogo.png'
import { MdOutlineShoppingCart } from "react-icons/md";

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
                      <a href="#" className={activeTab === 'Home' ? 'active' : ''} onClick={() => handleTabClick('Home')}>
                      Home
                      </a>     
                  </li>
                  <li>
                      <a href="#" className={activeTab === 'Dishes' ? 'active' : ''} onClick={() => handleTabClick('Dishes')}>
                      Dishes
                      </a>     
                  </li>
                  <li>
                      <a href="#" className={activeTab === 'About' ? 'active' : ''} onClick={() => handleTabClick('About')}>
                      About Us
                      </a>     
                  </li>
                  <li>
                      <a href="#" className={activeTab === 'Contact' ? 'active' : ''} onClick={() => handleTabClick('Contact')}>
                      Contact
                      </a>     
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
                
          </div>
    
          </div>
              </nav>
  )
}

export default Navbartop