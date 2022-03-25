import React from 'react'
import {MdPlayArrow} from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {BiLike} from 'react-icons/bi'
import {AiOutlineDislike} from 'react-icons/ai'
import {IoIosArrowDown}from 'react-icons/io'







const CardHover = ({wallpaper}) => {
  return (
        
    <div className=" cursor-pointer   absolute z-50  w-[20rem] h-max    ">  
    
    <img src={wallpaper} alt="" className="w-full h-max"  />

    <div className="flex flex-col gap-3 p-2 bg-[#181818]">
          <div className="flex justify-between text-white text-[15px]" >
            <div className="flex gap-1"> 
               <a href="#"className="border-[1px] rounded-[50%] p-[8px] " > <MdPlayArrow/> </a> 
               <a href="#"className="border-[1px] rounded-[50%] p-[8px] " > <IoIosAdd/>  </a> 
               <a href="#"className="border-[1px] rounded-[50%] p-[8px] " > <BiLike/></a>
               <a href="#"className="border-[1px] rounded-[50%] p-[8px] " ><AiOutlineDislike/></a>
            </div>
             <span className="border-[1px] p-[8px] rounded-[50%]"> <IoIosArrowDown/></span>                   
         
          </div>

         <div className=" flex gap-2">
            <span className="text-[#46d369]">92% para ti</span>
            <span className="text-white border-[1px] px-[4px] ">13+</span>
            <span className="text-white"> 1 hs 25 min</span>
            <span className="text-white border-[1px] text-sm px-[5px] py-"> HD </span>
            
         </div>

         <div className="flex gap-2 text-white">
            <span>Psicológico</span> 
            <span>Suspenso</span>
            <span>Drama</span>  
        </div> 
    
    
    </div>

</div>
  )
}

export default CardHover