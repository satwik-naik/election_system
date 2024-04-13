import React, { useState } from 'react'
import Navbar from './Navbar';
import VoteCard from './VoteCard';

export default function Voteing() {
    const [click,clicked]=useState(false);
    const partyList=[
      {
        image:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
        patyName:"ARN",
      },
      {
        image:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
        patyName:"BJN",
      },
      {
        image:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
        patyName:"CCN",
      },
      {
        image:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
        patyName:"RRT",
      },
      {
        image:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
        patyName:"Others",
      }     
    ]
  return (
   
    <>
   <Navbar/>
   <section className='max-w-[1340px] mx-auto h-[80vh] flex justify-center items-center flex-col space-y-10'>
      {
        partyList.map((data)=>{
          return <VoteCard image={data.image} name={data.patyName} />
        })
      }
   </section>

    </>

  )
}
