import React from 'react'
import Button from './Button'

const Newsletter = () => {
  return (
    <div className='mt-[5px] bg-[#2699fb] p-[50px]  w-full '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-2'>
        <div className='text-[white] flex flex-col justify-center'>
          <div className='text-2xl md:text-3xl font-bold duration-700'> Want to learn latest IT skills?</div>
          <div className='text-[13px]'>Sign up to our newsletter and stay up to date</div>
        </div>
        <div className='flex flex-col md:items-end justify-center'>
          <div className='flex'>
            <input type="email" placeholder='Enter email' className='mr-[7px] p-[7px] w-[200px] rounded'/>
            <Button btnTxt={'Notify Me'}/>
          </div>
          <div className='flex flex-col md:items-end text-[white] text-[12px]'>
            <span>We care about the protection of your data.</span>
            <span>Read our <a href="#" className='text-[blue] '>Privacy Policy</a></span>  
          </div>
        </div>
      </div>
      </div>
  )
}

export default Newsletter