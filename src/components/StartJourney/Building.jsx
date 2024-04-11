import React from 'react'
import ExploreMore from '../../assets/Frame 626624 (1).png';
import Details from '../../assets/Group 626358.png';
import ActionButton from '../../ui-components/ActionButton';
ActionButton
export default function Building() {
  return (
    <main className='relative h-full justify-center'>
    <div className='relative bg-[#f3f3f3] mt-4 mx-auto transform -skew-y-2 z- 
    '>
   
      <div className="p-4 flex justify-between z-50">
        <div>
          <div className='flex'>
            <div>
              <h1 className='font-extrabold text-8xl font-serif text-[#e1e1e1] '>3</h1>
            </div>
            <div>
              <h2 className='text-xl font-bold mt-7 ml-2'>Start building <br />your  team.</h2>
              <p className='text-xs mt-6'>Onboard your candidate right way and start <br />creating the next big thing.</p>
              <div className="flex gap-y-2 mt-4 relative  w-[200px]" >
        
                  <ActionButton text={'Browse Now'} link={"/browse_now"}/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-6'>
          <div className='flex-1 rounded-3xl h-72 w-96'>


          <img src={Details} alt="" className='w-96 h-80 -mt-4' />
            
          </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}
