import React from 'react';
import ExploreMore from '../../assets/Frame 626624 (1).png';
import profile1 from '../../assets/Vector (5).png';
import profile2 from '../../assets/Mask Group (1).png';
import profile3 from '../../assets/Mask Group.png';
import profile4 from '../../assets/image_21-removebg-preview 1.png';
import Evaluate from './Evaluate';
import Building from './Building';
import ActionButton from '../../ui-components/ActionButton';

export default function StartJourney() {
  return (
    <main className='journey relative h-[full]  justify-center w-[100vw] px-[calc(5.3%)] '>
      <h1 className='text-center text-5xl font-bold relative pt-[50px]'>Start your journey today.</h1>
      <div className='relative bg-[#edeffe] mt-16 mx-auto transform -skew-y-2 z-'>
        <div className="p-4 flex justify-between z-50">
          <div>
            <div className='flex'>
              <div>
                <h1 className='font-extrabold text-8xl font-serif text-[#d6cdef] '>1</h1>
              </div>
              <div>
                <h2 className='text-xl font-bold mt-7 ml-2'>Find your next star <br />performer.</h2>
                <p className='text-xs mt-6'>Explore the vast zwilt marketplace to find the candidate <br /> that meets your need.</p>
                 <div className="flex gap-2 mt-4 w-[200px]">
                 
                  <ActionButton text={'Join Now'} link={"/browse_now"}/>
            
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex gap-6 -mt-4'>
              <div className='bg-[#f9f9ff] rounded-b-3xl w-44'>
                <img src={profile2} alt="" className='bg-[#f9d9ce] mb-2 rounded-bl-3xl' />
                <div className="border-r border-l border-b -mt-3 rounded-b-3xl border-black">
                  <p className='ml-4 mt-4'>Ruby Developer</p>
                  <p className='text-xs ml-4 mt-5'>Redwood City, California</p>
                  <p className='text-xs ml-4 mb-4'>7 years experience</p>
                </div>
              </div>
              <div className='bg-[#f9f9ff] rounded-b-2xl w-44'>
                <img src={profile3} alt="" className='bg-[#c8efc4] rounded-bl-2xl' />
                <p className='ml-4 mt-2'>System ops engineer</p>
                <p className='text-xs ml-4 mt-5'>Redwood City, California</p>
                <p className='text-xs ml-4 mb-4'>7 years experience</p>
              </div>
            </div>
            <div className='flex gap-6 '>
              <div className=' w-44'>
                <img src={profile1} alt="" className='bg-[#d8d2fe] mt-6 rounded-t-2xl' />
              </div>
              <div className=' w-44'>
                <img src={profile4} alt="" className='bg-[#fbdd8b] mt-2 rounded-t-2xl' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Evaluate/>
      <Building/>
    </main>
  );
}
