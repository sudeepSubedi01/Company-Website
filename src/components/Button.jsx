import React from 'react'

const Button = ({btnTxt}) => {
  return (
    <div>
      <button className='bg-black rounded text-[white] h-[40px] w-[130px]'>{btnTxt}</button>
    </div>
  )
}

export default Button