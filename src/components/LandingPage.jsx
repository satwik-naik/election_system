import React from 'react'
import Navbar from './Navbar'

export default function LandingPage() {
  return (
    <>
        <Navbar/>

        <div className='max-w-[1340px] mx-auto h-[80vh]  flex text-center justify-center'>
           <div className='flex  flex-col items-center justify-center'>
              <button className='bg-black text-white  px-10 py-5 rounded-lg'
              onClick={()=>{
                window.location.href="http://localhost:3000/qr"              
              }}>Sign in using OR code </button>
              <p className='my-5'>OR</p>
              <button className='bg-black text-white  px-10 py-5 rounded-lg' onClick={()=>{
                window.location.href="http://localhost:3000/v-id"
              }}> Sing in using Voter Id</button>
           </div>
        </div>
    </>
  )
}
