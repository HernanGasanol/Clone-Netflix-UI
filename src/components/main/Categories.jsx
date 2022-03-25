import React from "react";
import {useState, useEffect} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'



// let results;

// discovermovies ? discovermovies.forEach(item => results=(item.results)) : 'no ha'


const Categories = ({ category}) => {
  return (
    <>
      <h2 className="mb-6">{category}</h2>
  
  
    </>
  );
};

export default Categories;
