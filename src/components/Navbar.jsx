import React from 'react'
import pesLog from '../image/pesLogo.png'

export default function () {
  return (
    <div className='max-w-[1340px] mx-auto h-[4rem] bg-red-200 flex justify-between items-center font-bold'>
    <div>
       <img src={pesLog} className='h-10'/>
    </div>
    <div>
       <p>Election System</p>
    </div>
    </div>
  )
}
