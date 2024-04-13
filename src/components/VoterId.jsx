import React from 'react'
import Navbar from './Navbar'

export default function () {
  return (
   <>
    <Navbar/>

    <section className='max-w-[1340px] mx-auto h-[80vh] flex justify-center items-center flex-col '>

        <div className='h-[15rem] w-[25rem] bg-white my-5 flex flex-col items-center justify-center space-y-4 rounded-lg border-4 border-black'>
               <p className='font-bold font text-[1.5rem] '>Enter Voter Id</p>
               <input type='text' placeholder='Enter Voter Id '  className='border-2 border-blue-500 rounded-lg px-5 py-2 my-10'/>
               <p className='text-xs text-gray-500'>You will get Opt in your Mobile Number....</p>
               <button className='bg-blue-600 text-white py-2 px-5 rounded-lg'>Submit</button>
        </div>
        <div className='h-[15rem] w-[25rem] bg-white my-5 flex flex-col items-center justify-center space-y-4 rounded-lg border-4 border-black'>
               <p className='font-bold font text-[1.5rem] '>Enter OTP</p>
               <input type='text' placeholder='Enter OTP ' className='border-2 border-blue-500 rounded-lg px-5 py-2 my-10'/>
               <button className='bg-blue-600 text-white py-2 px-5 rounded-lg'>Submit</button>
        </div>
    </section>
   </>
  )
}
