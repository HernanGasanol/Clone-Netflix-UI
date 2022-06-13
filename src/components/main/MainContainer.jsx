import React from 'react'
import {useState ,useEffect } from  'react'
import Main from './Main'
import { moviesSliderData } from '../../../data'
// import '../slider/Carrousel.css'

import { categoriesData, headerData } from '../../../data'

const MainContainer = () => {
  

 return (
   <main className="w-full absolute z-20 top-[50vw]  text-white text-xl font-sans font-medium ">
     <div className="flex flex-col  pl-8">
           <div>
         {categoriesData.map(item => (
             <Main category={item.title} data={moviesSliderData} />
         ))}
        
       </div>
     </div>
   </main>
 );
}

export default MainContainer