import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import YoutubeClone from '../../img/YoutubeClone.PNG'
import products from '../../img/products.png'
import ChatApp from '../../img/ChatApp.png'
import ShayriHib from '../../img/shayriHub.PNG';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Mousewheel, Pagination } from "swiper";
// import Tooltip from '@mui/material/Tooltip';



const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        // grabCursor={true}
        className="portfolio-slider"
        mousewheel={true}
        modules={[Mousewheel]}
      >
        <SwiperSlide >
          
            <a href="https://lovely-vacherin-99da77.netlify.app/" ><Tippy content="Youtube Clone using Rapid API and MUI for styling"><img src={YoutubeClone} alt=""/></Tippy></a>
          
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RohitMOfficial/e-commerce" ><Tippy content="E-Commerce Website with payment method integrated"><img src={products} alt="" id="ecomm" /></Tippy></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RohitMOfficial/chat-app" ><Tippy content="Chat application using socket.io"><img src={ChatApp} alt="" /></Tippy></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RohitMOfficial/ShayriHub"><Tippy content="Shayri Hub application to create and share your shayri"><img src={ShayriHib} alt="" /></Tippy></a>
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Portfolio;
