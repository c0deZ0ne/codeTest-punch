import React from 'react'
import { AiFillPlaySquare } from 'react-icons/ai'

function Steps(data:{step:number,title:string}) {
  return (
<div className='flex border rounded-lg h-[80px]  relative gap-x-[10px] border-gray-300  items-center pl-3 align-middle'>
                    < AiFillPlaySquare className='text-4xl bg-[#ececec] text-black p-2 rounded-full'/>
                    <p className=' text-sm '> <span className='font-semibold capitalize'>{data.step}:</span> {data.title}</p>
                </div>  )
}

export default Steps