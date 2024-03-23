import React, { useEffect, useState } from 'react'
import './homecontact.css'
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const homecontact = () => {

    useEffect(() => {
        AOS.init({
          duration: 8000, // animation duration
       once:true
        });
      }, []);
    
    
  return (
      <div data-aos="fade-up">
          <div className="contctbtn">
              <div className="clock">
                  <FaClock className='clockicon'/>
                  <h4>Today 10:00 AM to 7:PM</h4>
                  <p>working hours</p>
              </div>   
              <div className="location">
                  <FaLocationDot className='locationicon' />    <h4>Nigeria, Akure Ondo</h4>
                  <p>Get Directions</p>
              </div>
              <div className="phone">
                  <IoCall className='phoneicon' />
                  <h4>+2348102608378</h4>
                  <p>Call Online</p>
              </div>
          </div>
    </div>
  )
}

export default homecontact