import React from 'react'
import Categories from './Categories'
import Carrousel from '../slider/Carrousel'


const Main = ({category, data}) => {
  return (
   <div className='mb-6'>

       <Categories category={category} />
       <Carrousel data={data}/>
  
   </div>
  )
}

export default Main