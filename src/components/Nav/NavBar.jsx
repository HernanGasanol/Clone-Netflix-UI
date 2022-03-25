import React from 'react'
import UserMenu from './UserMenu'
import logo from './logo.png'
import Notifications from './Notifications'
import Search from './Search'
import { Link } from 'react-router-dom'


const NavBar = ({positionScroll}) => {
  const nav = [{title:"Inicio", id:90 ,to:'browse'}, {title:"Series",id:91, to:'series'}, {title:"Películas",id:92 ,to:'peliculas'}, {title:"Novedades populares",id:93 , to:'novedades'}, {title:"Mi lista",id:94 , to:'mi-lista'}];

  return (
    <div  className={`${positionScroll> 40 ? ' bg-[#141414]    md:bg-[#141414] flex  h-max  md:h-[70px]  items-center justify-between  w-full  px-10  md:px-14  fixed top-0 z-20' :'flex  items-center justify-between  w-full h-max mt-5 px-10  md:px-14 z-30 fixed top-0 ' }  z-30  `}>
      <div className='flex  items-center gap-8  '>
        <div className="w-20 text-1.5vm md:w-24 ">
          <img src={logo} alt="netflix logo" className="w-full" />
        </div>

        <nav className="text-white  ">
          <ul className="gap-5 hidden md:flex text-[1.2vw] cursor-pointer ">
            {nav.map((item) => (
             <Link to={`/${item.to}`}> <li key={item.id} className="hover:text-gray-300 ">{item.title}</li> </Link> 
            ))}
          </ul>
        </nav>

        <nav className="md:hidden text-[1.5vw]"> 
          <ul className="text-white ">  
         
              <li className=" flex items-center justify-center group relative">
                <p>explorar</p>
                <div className="group-hover:flex text-center absolute top-8 hidden"> 
                  <ul className=" flex  flex-col gap-8 bg-[#010102] w-80 p-10" >
                  {nav.map((item) => (
                      <li key={item.id} > <a href="#" >{item.title}</a></li>
                  ))}
                  </ul>
                </div>
              </li>
     
          </ul>
        </nav>


      </div>

    
      <div className='flex items-center gap-5 cursor-pointer'>
          <div><Search/></div> 
          <div><Notifications/></div>
          <div><UserMenu/></div>

      </div>
    
    
    
    </div>
  );
};

export default NavBar