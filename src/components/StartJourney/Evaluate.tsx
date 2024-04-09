import React from 'react';
import ExploreMore from '../../assets/Frame 626624 (1).png';
import Details from '../../assets/Group 626351.png';

export default function Evaluate() {
  return (
    <main className='relative h-full justify-center'>
      <div className='relative bg-[#fef7e1] mt-4 mx-auto max-w-[calc(100%-300px)] transform -skew-y-2 z-'>
        <div className="p-4 flex justify-between z-50">
          <div>
            <div className='flex'>
              <div>
                <h1 className='font-extrabold text-8xl font-serif text-[#fce6ad] '>2</h1>
              </div>
              <div>
                <h2 className='text-xl font-bold mt-7 ml-2'>Evaluate to your <br />heart's content.</h2>
                <p className='text-xs mt-6'>Access the candidate through work history, transparent, <br /> test and video interview that meets your need.</p>
                <div className="flex gap-2 mt-4">
                  <img src={ExploreMore} className="w-12" alt="DotNet Logo" />
                  <p className="text-center text-gray-700 mt-4">Browse Now</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex'>
    
            <div className='flex-1 rounded-3xl h-72 w-96'>


<img src={Details} alt="" className='w-96 h-80 -mt-4' />
  
</div>


              
            </div>
        
          </div>
        </div>
      </div>
    </main>
  );
}
