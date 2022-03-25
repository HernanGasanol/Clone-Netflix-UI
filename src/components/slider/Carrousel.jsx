import React from "react";
import 'swiper/css/bundle'
import {useState} from 'react'
import CardHover from "./CardHover"
import  './carrousel.css'
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loader from "../Loader";
// import { getMovies } from "../../services/services";


const Carrousel = ({data}) => {
 


 
 return (
   
  <Swiper 
    spaceBetween={5}
    slidesPerView={5}
    loop={true}  
    grabCursor={true}

     navigation={true}
     modules={[Navigation ,Thumbs]}
    className='flex h-max relative select-none '     
    
   
   >
     { data? 
       
         <>
         { data.map(item => (
           <SwiperSlide>
              <img src={item.image} alt="" />
           </SwiperSlide>
         ))}
         
         </>

         : <SwiperSlide className="flex items-center justify-center "> <Loader/> </SwiperSlide>}

     
 
</Swiper>
 
 )
};
  // <img src={` https://image.tmdb.org/t/p/original/${item.poster_path} `} alt="image" />
export default Carrousel;
