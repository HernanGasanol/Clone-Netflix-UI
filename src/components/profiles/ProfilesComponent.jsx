import React from "react";
import './profiles.css'
import logo from '../Nav/logo.png'
import { Link } from "react-router-dom";
import {useState} from 'react'
import { useConsumer } from "../../context/Context";







const ProfilesComponent = () => {
 
  const [userSelected,setUserSelect]=useState('')
   const userList=useConsumer()
  const handleClick= (e)=> {
    setUserSelect(e.target.id)
  }
  
  console.log(userList)
 
 
  return (

   <div className="relative flex flex-col justify-center items-center h-screen w-screen ">
    
     <div className="absolute top-7 left-10 w-[7vw] "><img src={logo} alt="" /></div>
     
      <main >
        <div className="flex flex-col items-center gap-20 " >
          <div className="text-[5vw] text-white  md:text-[3rem] font-sans font-bold ">¿Quién está viendo ahora?</div>
         
          <section className=" flex flex-wrap   md:flex md:justify-center gap-6 ">
              {userList.map(user => (
                 <div className="flex flex-col items-center gap-2 text-gray-500   h-[9rem] w-[9rem]">
                <Link to="/browse"><div className="flex flex-col items-center  font-extralight  gap-3 hover:border-2 hover:border-white  " >
                    <img src={user.img} alt="" id={user.name} className="w-full rounded-md hover:rounded-none  " onClick={handleClick} /> 
                    
                  </div> </Link> 
                  
                  <span>{user.name}</span>
                  
                  </div>
              ))}

             </section>

             <button className="text-gray-500 font-extralight tracking-[2px] border-[2px] border-gray-500 px-6 py-2  ">administrar perfiles</button>
        </div>
      </main>
    </div>


  );
};

export default ProfilesComponent;
