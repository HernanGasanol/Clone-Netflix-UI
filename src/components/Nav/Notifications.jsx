import React from 'react'
import {IoMdNotifications} from 'react-icons/io'
import { notification } from '../../../data'



const CartNotifications= ()=>{
  return (
  
     
     <ul className="flex flex-row-reverse mt-8">
        <li className={`flex flex-col justify-start bg-[#000000f3] h-96 w-96  overflow-y-scroll	`}>
        
          {notification.map((item) => (
            <div key={item.id} className=" text-white border-b-[1px] ">
              <ul className="flex p-4  gap-4 ">
                <li>
                  <img src={item.img} alt="" />
                </li>
                <li>
                  <h3>{item.titulo}</h3>
                  <p>{item.subtitulo_film}</p>
                  <span className="text-sm text-gray-300"> {item.date}</span>
                </li>
              </ul>
            </div>
          ))}
        </li>
      </ul>
  
  );
}


const Notifications = () => {
 

   
 
 
    return (
      <nav>
        <ul className="text-white">
          <li className="group flex flex-row-reverse relative ">
            <IoMdNotifications className=" text-xl  md:text-[1.8rem]" />


            <div className="group-hover:flex  absolute top-5 bg-transparent   hidden  ">
                <CartNotifications/>
            </div>
          
          
          </li>
        </ul>
      </nav>
    );
}

export default Notifications



