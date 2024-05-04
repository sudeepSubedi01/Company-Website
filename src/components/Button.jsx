import React from 'react'

const Button = ({btnTxt}) => {
  return (
    <div>
      <button className={`${btnTxt==='Start Trial' ? 'bg-[green]' : 'bg-[black]' } text-[white] h-[40px] w-[130px] rounded`}>{btnTxt}</button>
    </div>
  )
}

export default Button