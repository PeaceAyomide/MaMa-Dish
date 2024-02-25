import React from 'react'
import HomeDish from '../Home/HomeDish.png'
import { FaArrowRight } from "react-icons/fa";
import "./Home.css"
import Contacthome from './homecontact/homecontact';

const Home = () => {
  return (
    <div>
      <div className="contentfood">
        <div className="headingwrite">
        <h1>Your Favourite Food<br/>
            Delivered Hot & <br />
            Fresh</h1>
          <p>Healthy switcher chef do all prep work line pending,
<br /> Chopping and Marinating so you can cook a fresh food
          </p>
          <div className="foodbtn">
            <button>Order Now <FaArrowRight/></button>
          </div>
        </div>
        <div className="foodimg">
          <img src={HomeDish} alt="" />
        </div>
        
      </div>
  <Contacthome/>
      </div>
      )
}

export default Home