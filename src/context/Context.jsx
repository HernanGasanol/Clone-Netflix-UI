import userIcon1 from '../public/usersProfiles/users/userIcon1.png'
import userIcon2 from '../public/usersProfiles/users/userIcon2.png'
import userIcon3 from '../public/usersProfiles/users/userIcon3.png'
import userIcon4 from '../public/usersProfiles/users/userIcon4.png'
import userIcon5 from '../public/usersProfiles/users/userIcon5.png'

import { createContext , useContext , useEffect, useState } from "react";
// import { getMovies } from '../services/services'

const usersList=[{img:userIcon1, name:'Mati' },{img:userIcon2, name:'Dai' },{img:userIcon3, name:'Norma' },{img:userIcon4, name:'Bren' },{img:userIcon5, name:'Carlos' }]

const Context=createContext()


// hook consumir context
export const useConsumer= ()=>{
    return useContext(Context)
}

export const ContextProvider=({children}, {value})=>{


  
   
  
  return (
    <Context.Provider value={usersList} >
        {children}
    </Context.Provider>
  )
}

