import React from 'react'
import laptopPic  from '../assets/laptop.jpg'
import Button from './Button'

const Experts = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 pl-[5px] '>
        <div className='flex justify-center'>
          <img src={laptopPic} alt="not found" className='md:w-[70%] w-[50%]' />
        </div>
        <div className='flex flex-col items-start justify-center'>
          <span className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</span>
          <p className='text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nostrum omnis atque dolor id accusantium laborum dolorum quod magni eaque voluptate harum ratione voluptates commodi corrupti, sequi impedit. Sed aliquam eveniet quas libero est vitae ut sunt fuga labore aperiam fugiat, consequuntur ipsa odio porro. Laudantium ad explicabo nemo deleniti.
          </p>
          <br />
          <Button/>
        </div>
      </div>
      </div>
  )
}

export default Experts