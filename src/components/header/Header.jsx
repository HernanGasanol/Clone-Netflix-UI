import React from 'react'
import {useState , useEffect} from 'react'
import {headerData} from '../../../data'

import {BsTriangleFill} from 'react-icons/bs'
import {BiHelpCircle} from 'react-icons/bi'

const Header = () => {

  const [movie, setMovie]=useState([])
 

  const  getRandomMovie= (headerData)=>{
return headerData[Math.floor(Math.random()*headerData.length)]

}



useEffect(()=>{
setMovie(getRandomMovie(headerData))


},[])

const {id,title,desc,wallpaper}=movie

  
  return (
    <div className='  w-full   select-none h-[150vh] opacity-80 z-10 relative'>
  
      <img src={wallpaper} alt="" className="  w-full object-cover absolute   " />

       <div className=" top-14  left-14   absolute md:top-20 md:left-20 ">
          <div className=" flex flex-col  text-white">
           
            <div className=" w-[50%] md:w-full mb-10"> <img src={title} alt="" className="w-full" /> </div>
            <div className="w-96 font-bold mb-4 "><p className="text-xl  md:text-xl ">{desc}</p> </div> 
           
           <div className="flex  gap-10"> 
              <button className=" rounded-md  flex items-center hover:bg-gray-300 gap-2 justify-center bg-white p-2   text-xl md:w-40 text-black ">
              <BsTriangleFill className="rotate-90"/> <span> reproducir</span> 
               </button>
              <button  className=" rounded-md flex items-center gap-2 justify-center bg-gray-500 opacity-[50%] hover:bg-opacity-75 p-2  text-xl   md:w-40 text-white"> 
                <BiHelpCircle/> <span> reproducir</span> 
               </button>
           </div>
          </div>

       </div>

    


    </div>
  )
}

export default Header