import React, { useEffect, useState } from 'react'
import './Homeabout.css'
import { GiChickenOven } from "react-icons/gi";
import { PiHandTapFill } from "react-icons/pi";
import { FaTruck } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Homeabout = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true  
        });
      }, []);

  return (
      
    <div className="Habout" data-aos="zoom-in">
              <div className="Hcontent">
              <h1>How It Works</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Eligendi, reprehenderit.</p>
          </div>  
          
          <div className="Hbox">
              <div className="Hboxz"><GiChickenOven className='Hicon'/>
                  <h4>Pick Meal</h4>
                  <p>Lorem  sit amet consectetur adipisicing elit. Beatae, sequi enim aliquid animi eligendi possimus cumque.</p>
              </div>  
              <div className="Hboxz"><PiHandTapFill className='Hicon'/>
              <h4>Choose often</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro distinctio vero molestiae enim. loremk0</p>
              </div>  
              <div className="Hboxz"><FaTruck className='Hicon'/>
              <h4>Fast Delivery</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro distinctio vero molestiae enim. loremz0</p>
              </div>  
          
          </div>
      </div>
  )
}

export default Homeabout