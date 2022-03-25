import React from 'react'
import ReactDOM from 'react-dom'

import './global.css'
import { BrowserRouter} from "react-router-dom";


import App from './pages/App'
import { ContextProvider } from './context/Context';







ReactDOM.render(
 <ContextProvider> 
  <BrowserRouter >
   
       <App /> 
   
  </BrowserRouter>
  </ContextProvider> ,
  document.getElementById('root')
)
