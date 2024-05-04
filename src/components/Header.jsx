import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Header = () => {
  const [sidebar, setSidebar] = useState(true)
  return (
    <div className='bg-[#2699fb] p-8'>
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <div className='font-bold text-3xl'>WsCube Tech.</div>
        {
          sidebar ? 
            <FaBars className='text-white text-2xl md:hidden block' onClick={()=>{setSidebar(!sidebar)}}/>
            :
            <IoIosClose className='text-white text-3xl' onClick={()=>{setSidebar(!sidebar)}} />
        }
        
        {/*  */}
        <ul className='hidden md:flex gap-4 text-white '>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Company</li></a>
          <a href="#"><li>Resources</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
        <ul className={`md:hidden text-white fixed bg-black top-[100px] w-full h-screen duration-1000 left-[${sidebar ? '0px': '-100%'}]`}>
          <a href="#"><li className='p-4'>Home</li></a>
          <a href="#"><li className='p-4'>Company</li></a>
          <a href="#"><li className='p-4'>Resources</li></a>
          <a href="#"><li className='p-4'>About</li></a>
          <a href="#"><li className='p-4'>Contact</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Header