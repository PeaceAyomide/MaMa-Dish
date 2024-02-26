import React from 'react'
import './Hometwo.css'
import Foodimage from '../Hometwo/HarmBurger.png'
import { FaPlayCircle } from "react-icons/fa";

const Hometwo = () => {
  return (
      <div>
          <div className="hometwo">
              <div className="imgtwo">
                  <img src={Foodimage} alt="" /></div>
              <div className="homtwocontent">
              <h1>Food Is An Important Part<br/> Of A Balanced Diet</h1>
                  <p>Food is Essential for balanced diet, crucial for health,<br /> nourishes body, sustains energy, vital for overall well-being.</p>
                  <div className="loadvidbtn">
                  <button>Load More</button>
                  <div className="watchmore">
                          <FaPlayCircle className='playbtn'/>
                  <h5>Watch Videos</h5>        
                  </div>
                  </div>
                 
              </div>
                  
          </div>
      </div>
  )
}

export default Hometwo