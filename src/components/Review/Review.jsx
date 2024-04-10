import React from 'react';
import Groove from '../../assets/groovehq.png';
import Quote from '../../assets/2x.png';
import Shopify from '../../assets/zwilt-tba-1-01 2.png';
import GrooveLog from '../../assets/Frame 626655.png';
export default function Review() {
  return (
    <main className='relative mt-1 h-full  flex'>
      <div className='absolute inset-0 bg-[#202229] transform -skew-y-2 z-0' />
      <div className="absolute -top-5 right-8 z-0">
        <img src={Quote} alt="Quote" className='w-28'/>
      </div>

      <div className='z-50 mt-28 mb-52 w-full'>
        <div className="flex justify-center lg:gap-72 mt-24"> 
        <div>
        <h4 className='text-white text-5xl font-bold'>How it worked  <br />
            <span className='text-white'> for Jason </span>
            <img src={Shopify} className="w-20 p-3 rounded-full inline-block align-middle" alt="Shopify Logo" />
            <span className='text-white'> at </span>  
          </h4>
          <img src={Groove} className='w-24 mt-4 inline-block align-middle' alt="" />
          <p className='text-gray-400 text-lg mt-4'>
  zwilt enabled us to deliver on time and they've <br /> been heavy hitters on our corner since.
          </p>
        </div>


<div>

<div className="flex items-center mr-96  justify-center">
                     <img src={GrooveLog} className="w-32 p-3 rounded-full" alt="Groove Logo" />
                    <div className="">
                    <p className="text-white text-3xl capitalize mt-2">jason makki</p>
                    <p className="text-gray-500 mt-2">Engineer at GROOVE</p>
                    <p className="text-gray-500 mt-2">San Francisco</p>
                     </div>

         
          </div>

          <div>
          <p className='text-gray-400 ml-8 text-lg mt-8'>
  Zwilt enabled us to deliver on time and they've <br /> been heavy hitters on our corner since.   zwilt enabled <br /> us to deliver on time and they've <br /> been heavy hitters on our corner since.   zwilt enabled <br /> us to deliver on time and they've <br /> been heavy hitters on our corner since.
          </p>
          
          </div>

</div>
        
      
          
        </div>
        
      </div>
    </main>
  );
}
