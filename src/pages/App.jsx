import React from 'react'
import Browse from './Browse'
import Profiles from './Profiles'
import { BrowserRouter, Route , Routes} from "react-router-dom";
import View from './View'
import Novedades from './Novedades';




const App = () => {
 

 
  return (

   
    
    <Routes>
      <Route exact path='/' element={<Profiles />}/>
     
      <Route exact path="/browse" element={<Browse/>}/>
      <Route exact path="/latest" element={<Novedades/>}/>
        

    
   
      <Route exact path='/view' element={<View/>}/>
      
     
      </Routes>

     

  )
}

export default App