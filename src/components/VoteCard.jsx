import React from 'react'

export default function VoteCard(props) {
  return (
    <div className='bg-white w-[25rem] flex  px-4 py-5 justify-between border-4 border-black rounded-lg'>
      <div className='flex w-[7rem] justify-between items-center'>
        <img className='h-10 rounded-full' src={props.image} alt='image'/>
        <p>{props.name}</p>
      </div>
      <button className='bg-blue-500 text-white px-4 rounded-lg' >click</button>
    </div>
  )
}
