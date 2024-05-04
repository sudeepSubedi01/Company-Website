import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#2699fb] w-full px-[50px] py-[40px]'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-4 gap-[15px]'>
        <div>
          <p className='text-black text-[25px] font-bold'>WsCube Tech.</p>
          <p className='pt-[10px] text-white text-[16px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde laborum soluta. sum dolor sit amet consectetur adipisicing elit. Magnam unde laborum Repellat, architecto debitis.</p>
          <div className='mt-[10px] text-white text-[25px] flex justify-between'>
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitterSquare />
            <FaGithub />
            </div>
        </div>
        <div className="pt-[20px] flex flex-col items-start gap-[8px]">
          <p className='text-black text-[15px] font-bold '>Solutions</p>
          <p className='text-white text-[16px] '>Analysis</p>
          <p className='text-white text-[16px] '>Marketing</p>
          <p className='text-white text-[16px] '>Commerce</p>
          <p className='text-white text-[16px] '>Insights</p>
        </div>
        <div className="pt-[20px] flex flex-col items-start gap-[8px]">
        <p className='text-black text-[15px] font-bold '>Support</p>
          <p className='text-white text-[16px] '>Pricing</p>
          <p className='text-white text-[16px] '>Documentation</p>
          <p className='text-white text-[16px] '>Guides</p>
          <p className='text-white text-[16px] '>API Status</p>
        </div>
        <div className="pt-[20px] flex flex-col items-start gap-[8px]">
        <p className='text-black text-[15px] font-bold '>Company</p>
          <p className='text-white text-[16px] '>About</p>
          <p className='text-white text-[16px] '>Blog</p>
          <p className='text-white text-[16px] '>Jobs</p>
          <p className='text-white text-[16px] '>Press</p>
          <p className='text-white text-[16px] '>Careers</p>
        </div>
      </div>
    </div>
  )
}

export default Footer