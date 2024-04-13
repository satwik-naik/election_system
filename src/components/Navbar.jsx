import React from 'react'
import pesLog from '../image/pesLogo.png'

export default function () {
  return (
    <section className='max-w-[1340px] mx-auto h-[4rem]  rounded-lg my-3  flex justify-between items-center font-bold'>
    <div>
       <img src={pesLog} className='h-10'/>
    </div>
    <div>
       <p className='mx-4'>Election System</p>
    </div>
    </section>
  )
}
