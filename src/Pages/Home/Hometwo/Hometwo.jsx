import React, { useEffect, useState }  from 'react'
import './Hometwo.css'
import Foodimage from '../Hometwo/HarmBurger.png'
import { FaPlayCircle } from "react-icons/fa";
import { Blurhash } from 'react-blurhash';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hometwo = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once:true
    });
  }, []);


    const [ImageLoaded, setImageLoaded] = useState(false)

    useEffect(
      () => {
        const img = new Image()
        img.onload = () => {
          setImageLoaded(true)
        }
  
        img.src = Foodimage;
       
      }, [Foodimage]
    )

  return (
      <div data-aos="fade-up">
          <div className="hometwo">
              <div className="imgtwo">
              <div style={{borderRadius: '20rem', overflow: 'hidden',marginRight: '-20px',  }}>
        {!ImageLoaded && (
            <Blurhash
              hash='LeK,BA$LB=Rk~BoIJBWET0juNbof'
              width={350}
              height={350}
              resolutionX={32}
              resolutionY={32}
              punch={1}
              
            />
            )}
                  </div>
                  {ImageLoaded && (
                  <img src={Foodimage} alt="" style={{ display: !ImageLoaded ? 'none' : 'inLine' }}/>)}</div>
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