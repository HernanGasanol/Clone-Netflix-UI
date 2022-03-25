import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useState} from 'react'


const Search = () => {
   
    const [click,setClicked] = useState(false)
   

  
     const clicked=() =>{
      setClicked(!click)

  
   }
     
  
  return (         
    <div>
        
            
            
        
       
      

        <div  className={` ${click ? 'flex h-8  bg-[rgba(5,4,4,0.68)] w-max border-[1px] items-center justify-center ' : 'bg-transparent '  }  `}> 
                        <div onClick={clicked}  className='flex  items-center  text-white mr-2 pl-1'  ><FaSearch className=' text-sm  md:text-[1.2rem]  '/></div> 
                        <input type="text" placeholder="Titulos,personas,géneros" className={` ${!click ? 'hidden ' : ' pr-14  bg-transparent rounded-none outline-none border-1-white text-white placeholder-white text-sm p-1' }  `} />  
                 </div>    

     
         
    </div>
  )
}

export default Search