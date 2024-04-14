import React, { useState } from 'react';
import Navbar from './Navbar';

export default function VoterIdPage() {
   const voterIds = ["AYS5062047", "WVR5299862", "WNA7982531"];
   const [value, setValue] = useState("");

   const handleInputChange = (event) => {
      setValue(event.target.value);
   };

   const handleSubmit = () => {
      if (voterIds.includes(value)) {
         window.location.href = "http://localhost:3000/otp";
      } else {
         window.location.href = "http://localhost:3000/v-id";
      }
   };

   return (
      <>
         <Navbar />
         <section className='max-w-[1340px] mx-auto h-[80vh] flex justify-center items-center flex-col '>
            <div className='h-[15rem] w-[25rem] bg-white my-5 flex flex-col items-center justify-center space-y-4 rounded-lg border-4 border-black'>
               <p className='font-bold font text-[1.5rem] '>Enter Voter Id</p>
               <input type='text' placeholder='Enter Voter Id ' onChange={handleInputChange} className='border-2 border-blue-500 rounded-lg px-5 py-2 my-10' />
               <p className='text-xs text-gray-500'>You will get Opt in your Mobile Number....</p>
               <button className='bg-blue-600 text-white py-2 px-5 rounded-lg' onClick={handleSubmit}>Submit</button>
            </div>
         </section>
      </>
   );
}
