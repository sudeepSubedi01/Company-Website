import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
import Button from './Button'

const Plans = () => {
  return (
    <div className='py-[100px]'>
      <div className='md:grid grid-cols-3 flex flex-col items-center max-w-[1240px] mx-auto gap-[30px]'>
        <div className='w-[50%] md:w-[90%] px-[30px] shadow-2xl h-[400px] hover:scale-105 duration-[500ms] flex flex-col items-center'>
          <img src={single} alt="single missing" className='h-[50px] md:h-[100px] w-auto duration-[800ms]' />
          <div className='font-bold text-[15px] mt-[15px]'>Web Development</div>
          <div className='font-bold text-[20px] my-[20px]'> $149 </div>
          <div className='flex flex-col text-center'>
            <span className='border-b border-[#454545] pb-2 text-[12px]'> Lorem ipsum dolor sit.</span>
            <apan className='border-b border-[#454545] pb-2 text-[12px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolores!</apan>
            <span className='border-b border-[#454545] pb-2 text-[12px]'> Lorem ipsum dolor sit.</span>
          </div>
          <div className="mt-[20px]">
            <Button btnTxt='Start Trial' />
          </div>
        </div>



        <div className='mt-[13px] w-[50%] md:w-[90%] shadow-2xl h-[400px] hover:scale-105 duration-[500ms] bg-gray-100 flex flex-col items-center'>
          <img src={double} alt="single missing" className='h-[50px] md:h-[100px] w-auto duration-[800ms]' />
          <div className='font-bold text-[15px] mt-[15px]'>Web Development</div>
          <div className='font-bold text-[20px] my-[20px]'> $149 </div>
          <div className='flex flex-col text-center'>
            <span className='border-b border-[#454545] pb-2 text-[12px]'> Lorem ipsum dolor sit.</span>
            <apan className='border-b border-[#454545] pb-2 text-[12px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolores!</apan>
            <span className='border-b border-[#454545] pb-2 text-[12px]'> Lorem ipsum dolor sit.</span>
          </div>
          <div className="mt-[20px]">
            <Button btnTxt='Start Trial' />
          </div>
        </div>



        <div className='mt-[13px] w-[50%] md:w-[90%] shadow-2xl h-[400px] hover:scale-105 duration-[500ms] flex flex-col items-center'>
          <img src={triple} alt="single missing" className='h-[50px] md:h-[100px] w-auto duration-[800ms]' />
          <div className='font-bold text-[15px] mt-[15px]'>Web Development</div>
          <div className='font-bold text-[20px] my-[20px]'> $149 </div>
          <div className='flex flex-col text-center'>
            <span className='border-b border-[#454545] pb-2 text-[12px]'> Lorem ipsum dolor sit.</span>
            <apan className='border-b border-[#454545] pb-2 text-[12px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolores!</apan>
            <span className='border-b border-[#454545] pb-2 text-[12px]'> Lorem ipsum dolor sit.</span>
          </div>
          <div className="mt-[20px]">
            <Button btnTxt='Start Trial' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans