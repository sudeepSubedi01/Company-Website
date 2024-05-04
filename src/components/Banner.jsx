import React from 'react'
import { ReactTyped } from 'react-typed'

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full h-[87vh] py-[90px]' >
      <div className="mt-[100px] max-w-[1240px] mx-auto flex flex-col items-center gap-5">
        <div className='text-xl duration-700 md:text-3xl font-bold'>Learn with Us</div>
        <div className='text-3xl duration-700 md:text-7xl font-bold text-white'>Grow with Us</div>
        <div className='text-3xl duration-700 md:text-5xl font-bold text-white'>
          Learn  
          <div className='text-zinc-600 inline'>
            <ReactTyped className='pl-1'
              strings={[' Web Development', ' Ethical Hacking', ' Digital Marketing']}
              typeSpeed={100}
              backSpeed={50}
              loop
            /></div>
        </div>

      </div>
    </div>
  )
}

export default Banner