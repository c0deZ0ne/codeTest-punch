import React from 'react'
import Vector  from '../../assets/Vector_logo.png';
export default function FAQ() {
  return (
    <main className='bg-[#f3f3f3] mb-10 h-full'>

  
            
      <h3 className='text-3xl pt-14 pb-16 font-bold text-center'>Frequently asked questions</h3>


      <div>
        <div className='flex border border-[#d6d6d6] text-center h-16'>
            <p className='border border-[#d6d6d6] w-44 pt-4 border-r'>General</p>
            <p className='text-center w-full mt-4 text-gray-500'>I want to work part-time, is that possible</p>
        </div>


        <div className='flex border border-[#d6d6d6] text-center h-16'>

            <p className='text-center w-full mt-4 text-gray-500 ml-32'>How long are the average projects?</p>
        </div>

        <div className='flex border border-[#e8e8e8] bg-[#e8e8e8] text-center h-16'>
            <p className='text-center w-full mt-4 ml-48'>How does the payment works?</p>
            <img src={Vector} className="w-6 mt-4 mr-20 h-3" alt="ArrowRight" />
        </div>

        <div className='flex border border-[#e8e8e8] text-center h-16'>
            <p className='text-center w-full text-gray-500 mt-4 ml-10'>How much can i learn?</p>
        </div>


        <div className='flex border border-[#d6d6d6] text-center h-16'>
            <p className='border border-[#d6d6d6] bg-[#e8e8e8] w-44 pt-4 border-r'>General</p>
            <p className='border border-[#d6d6d6] w-60 pt-4 border-r'>Joining Processes</p>
            <p className='text-center w-full mt-4 text-gray-500 -ml-48'>I want to work part-time, is that possible</p>
        </div>



        <div className='flex border border-[#d6d6d6] text-center h-16'>

            <p className='text-center w-full mt-4 text-gray-500 ml-36'>How long are the average projects?</p>
        </div>

        <div className='flex border border-[#e8e8e8] text-center h-16'>
            <p className='text-center text-gray-500 w-full mt-4 ml-28'>How does the payment works?</p>
        </div>

        <div className='flex border border-[#e8e8e8] text-center h-24 '>
            <p className='text-center text-gray-500 w-full mt-4 ml-14  '>How much can i learn?</p>
        </div>
      </div>
    
    </main>
  )
}
