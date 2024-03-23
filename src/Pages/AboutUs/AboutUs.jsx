import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './AboutUs.css';

import Davido from '../AboutUs/davido.jpg'
import Hilda from '../AboutUs/hilda.jpeg'
import DonJazzy from '../AboutUs/DonJazzy.jpg'
import Ramzy from '../AboutUs/ramzy.jpg'

import { AiTwotoneStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";


const AboutUs = () => {

  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 600 ? 1 : 2);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 680 ? 1 : 2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  return (
    <div className='aboutus'>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,  Autoplay]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
     className='swiper-container'
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }} // Autoplay every 2 seconds
        
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}   >
      <SwiperSlide ><div className="slide1">
        <div className="star">
<FaStar/><FaStar/><FaStar/><FaStar/><AiTwotoneStar/>

        </div>
        <div className="slide1content">
        Yo, fam, lemme put you on! Mama Dish restaurant? Straight vibes, bro! The food? Unmatched! Hamburger rice? Fire! Grilled meat? Next level! And the staff? Like family, man! Trust me, hit up Mama Dish for a lit dining experience, you won't regret it!
        </div>
        <div className="star1imgcontent">
          <img src={Davido} alt="" />
          <div className="davidocontent">
          <h5>Davido</h5>
          <p>African Biggest Artist</p>
          </div>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide><div className="slide1">
      <div className="star">
<FaStar/><FaStar/><FaStar/><FaStar/>
<FaStar/>
        </div>
        <div className="slide1content">
        Mama Dish is phenomenal! As a female chef, her creations truly shine. The salad bursts with freshness, while the hamburger is a savory delight with a unique Nigerian twist. A must-visit for anyone seeking delicious food crafted with care by a talented female chef.
        </div>
        <div className="star1imgcontent">
          <img src={Hilda} alt="" />
          <div className="davidocontent">
          <h5>Hilda</h5>
          <p>Guinness World Chef</p>
          </div>
          </div>
      </div></SwiperSlide>
      <SwiperSlide><div className="slide1">
      <div className="star">
<FaStar/><FaStar/><FaStar/><FaStar/>
<FaStar/>
        </div>
        <div className="slide1content">
        Mama Dish is exceptional! The salad was fresh, and the hamburger was packed with flavor. A definite must-try for anyone craving delicious food. The ambiance was also welcoming, making it a perfect dining experience.

        </div>
        <div className="star1imgcontent">
          <img src={DonJazzy} alt="" />
          <div className="davidocontent">
          <h5>Don Jazzy</h5>
          <p>African Music Producer</p>
          </div>
      </div></div></SwiperSlide>
      <SwiperSlide><div className="slide1">
      <div className="star">
<FaStar/><FaStar/><FaStar/><AiTwotoneStar/>
<AiTwotoneStar/>
        </div>
        <div className="slide1content">
        "Absolutely dreadful! Mama Dish serves up disappointment on a plate. And the service was abysmal. The ambiance had a charming rustic feel. A culinary disaster in every sense, but the atmosphere was oddly comforting. Still, avoid at all costs!

        </div>
        <div className="star1imgcontent">
          <img src={Ramzy} alt="" />
          <div className="davidocontent">
          <h5>Gordon Ramsay</h5>
          <p>World Best Chef</p>
          </div>
      </div>
      </div></SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}

export default AboutUs