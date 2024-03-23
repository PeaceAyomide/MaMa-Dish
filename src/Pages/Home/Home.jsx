import React, { useEffect, useState } from 'react'
import HomeDish from '../Home/HomeDish.png'
import { FaArrowRight } from "react-icons/fa";
import "./Home.css"
import Contacthome from './homecontact/homecontact';
import Hometwo from './Hometwo/Hometwo';
import Homeabout from './Homeabout/Homeabout';
import { Blurhash } from 'react-blurhash';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true 
    });
  }, []);



const [ImageLoaded, setImageLoaded] = useState(false)

  useEffect(
    () => {
      const img = new Image()
      img.onload = () => {
        setImageLoaded(true)
      }

      img.src = HomeDish;
     
    }, [HomeDish]
  )
  
  return (
    <div data-aos="fade-up">
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
        <div style={{borderRadius: '20rem', overflow: 'hidden',marginRight: '-20px',  }}>
        {!ImageLoaded && (
            <Blurhash
              hash='LGJu7IN|23rW%#ogxtRjT#wa8wOY'
              width={350}
              height={350}
              resolutionX={32}
              resolutionY={32}
              punch={1}
              
            />
            )}
            </div>
           {ImageLoaded && (
          <img src={HomeDish} alt="" style={{ display: !ImageLoaded ? 'none' : 'inLine' }}/> )}
        </div>
        
      </div>
      <Contacthome />
      <Hometwo />
      <Homeabout/>
      </div>
      )
}

export default Home