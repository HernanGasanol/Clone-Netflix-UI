import React from 'react'
import {RiPencilFill} from 'react-icons/ri'
import {BiUser} from 'react-icons/bi'
import {BiHelpCircle} from 'react-icons/bi'
import { UsersMenu } from '../../../data'

import user1 from '../../public/user1.png'
 


const UsersList=()=>{
  return(
    <ul className="flex flex-col gap-3 text-white px-3 py-5 ">
    {UsersMenu.map((user) => (
      <>
        <li >
   
          <a href="#" className="flex gap-2">
            <img src={user.img} alt="" />{" "}
            <span className="hover:underline"> {user.nombre}</span>
          </a>
        </li>
      </>
    ))}
 
  <ul className="flex justify-evenly  text-white">
    <li>
      <RiPencilFill className="text-[1.5rem] mr-2" />
    </li>
    <a className="text-sm">administrar perfiles</a>
  </ul>
 
  </ul>
  )
}


const HelpAndAccount=()=>{
  return(
    <ul className="flex flex-col gap-3 text-sm  w-[11rem] h-[5rem] bg-[#000000f3] justify-center  border-y-[0.5px]  text-white  items-center ">
    <li className="flex gap-3 w-4/5 justify-start ">
      <BiUser className="text-xl" />
      <p>cuenta</p>
    </li>

    <li className="flex gap-3   w-4/5 justify-start ">
      <BiHelpCircle className="text-xl" />
      <p>centro de ayuda</p>
    </li>
  </ul>
  )
}


const CloseAccount=()=>{
  return(
    <div className="flex text-sm p-2 w-[11rem] h-max bg-[#000000f3] justify-center    text-white  items-center ">
    <legend> cerrar sesión en Netflix</legend>
  </div>
  )
}



const UserMenu = () => {
 

  return (
    <nav>
      <ul>
        <li className=" flex flex-row-reverse  group  relative ">
          <img src={user1} alt="image user" className="rounded-[4px] " />
          <div className="bg-transparent top-8 group-hover:block  absolute hidden md:w-[11rem]   ">
            <div className="bg-black  mt-5 w-full  ">
              <UsersList />

              <HelpAndAccount />

              <CloseAccount />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default UserMenu


