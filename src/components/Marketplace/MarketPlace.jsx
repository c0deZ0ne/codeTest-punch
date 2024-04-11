import React from 'react';
import Shopify from '../../assets/pexels-christina-morillo-1181424-removebg-preview 1.png';
import Magento from '../../assets/pexels-puwadon-sangngern-13419240-removebg-preview 1.png';
import Data from '../../assets/image 244.png';
import DotNet from '../../assets/image 246.png';
import WebFlow from '../../assets/image 247.png';
import UX from '../../assets/image 248.png';
import Graphics from '../../assets/image 249.png';
import Illu from '../../assets/image 249 (1).png';
import Cenima from '../../assets/image 251.png';
import Unreal from '../../assets/image 250.png';

import Vector from '../../assets/Vector.png';
import Vector1 from '../../assets/Vector (1).png';
import Vector2 from '../../assets/Vector (2).png';
import Vector3 from '../../assets/Vector (3).png';
import Vector4 from '../../assets/Vector (4).png';
import ExploreMore from '../../assets/Frame 626624 (1).png';
import ActionButton from '../../ui-components/ActionButton';

function MarketPlace() {
  return (
    <main className=''>
        <div className='relative mt-16 h-full flex bg-[#edeffe]'>

      
      <div className='absolute inset-0 bg-[#edeffe] transform -skew-y-2 z-0' />

      <div className='z-10 mt-24 w-full'>
        <div className='flex items-center justify-center'>
          <h1 className='font-bold text-4xl text-[#202229] text-center'>Your one non-stop marketplace for finding <br />the talent your business needs.</h1>
        </div>

        <div className="flex justify-center lg:gap-72 mt-24">
            <div>
            <p className='text-2xl'>Find dev and IT professionals to <br />scale your business.</p>
            <div className='flex gap-6 mt-4'>
                <div className='flex gap-1'>
                <img src={Vector3} className="" alt="Shopify Logo" />
                <p className='text-sm'>989 Skills</p>
                </div>
         
            <div className='flex gap-1'>
            <img src={Vector2} className="" alt="Shopify Logo" />
            <p className='text-sm whitespace-nowrap'>45 Sub-Categories</p>
            </div>
       
            </div>
            </div>
          <div className='shadow bg-white p-6 rounded-lg flex flex-col w-1/2'>
            <h2 className="text-left mb-4">IT & Developer</h2>
            <div className="flex items-center justify-between w-full">

          
              <div className="flex flex-col items-center">
                <img src={Shopify} className="w-16 p-3 shadow-xl rounded-full" alt="Shopify Logo" />
                <p className="text-center mt-2">Shopify Developer</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={Magento} className="w-16 p-3 shadow-xl rounded-full" alt="Magento Logo" />
                <p className="text-center mt-2">Magento Developer</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={Data} className="w-16 p-3 shadow-xl rounded-full" alt="Data Scientist Logo" />
                <p className="text-center mt-2">Data Scientist</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={WebFlow} className="w-16 p-3 shadow-xl rounded-full" alt="WebFlow Logo" />
                <p className="text-center mt-2">WebFlow Developer</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={DotNet} className="w-16 p-3 shadow-xl rounded-full" alt="DotNet Logo" />
                <p className="text-center mt-2">DotNet Developer</p>
              </div>
              <div className="flex flex-col -mt-14 items-center">
                <img src={Vector} className="w-16 p-3 shadow-xl rounded-full" alt="Vector Logo" />
                
              </div>
            </div>
          </div>
        </div>



        <div className="flex justify-center lg:gap-72 mt-8 mb-10">
            <div>
            <p className='text-2xl'>Explore creative individuals with a <br />keen eye for detail.</p>
            <div className='flex gap-6 mt-4'>
                <div className='flex gap-1'>
                <img src={Vector3} className="" alt="Shopify Logo" />
                <p className='text-sm'>989 Skills</p>
                </div>
         
            <div className='flex gap-1'>
            <img src={Vector2} className="" alt="Shopify Logo" />
            <p className='text-sm whitespace-nowrap'>45 Sub-Categories</p>
            </div>

            
       
            </div>
            <div className='flex gap-1 mt-4'>
            <img src={Vector4} className="" alt="Shopify Logo" />
            <p className='text-sm whitespace-nowrap'>1011 Profiles</p>
            </div>
            
            </div>
            
          <div className='shadow bg-white p-6 rounded-lg flex flex-col w-1/2'>
            <h2 className="text-left mb-4">Design & Creative</h2>
            <div className="flex items-center justify-between w-full">
            <div className="flex flex-col -mt-14 items-center">
                <img src={Vector1} className="w-16 p-3 shadow-xl rounded-full" alt="Vector Logo" />
                
              </div>
          
              <div className="flex flex-col items-center">
                <img src={UX} className="w-12 p-3 shadow-xl rounded-full" alt="Shopify Logo" />
                <p className="text-center mt-2">Shopify Developer</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={Graphics} className="w-16 p-3 shadow-xl rounded-full" alt="Magento Logo" />
                <p className="text-center mt-2">Magento Developer</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={Illu} className="w-16 p-3 shadow-xl rounded-full" alt="Data Scientist Logo" />
                <p className="text-center mt-2">Data Scientist</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={Unreal} className="w-16 p-3 shadow-xl rounded-full" alt="WebFlow Logo" />
                <p className="text-center mt-2">WebFlow Developer</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={Cenima} className="w-16 p-3 shadow-xl rounded-full" alt="DotNet Logo" />
                <p className="text-center mt-2">DotNet Developer</p>
              </div>
           
            </div>
            
          </div>
          
        </div>

        <div className="flex gap-96 ml-10 mb-10">
      
             <div className="flex gap-2 mt-4 w-[200px]">
                 
                  <ActionButton text={'Explore More'} link={"/browse_now"}/>
            
                </div>

              <div className="flex flex-col mr-96 items-center">
               
                <p className="text-center text-gray-700 mt-2 ml-24"><span className='font-bold'>30 more </span> to explore</p>
              </div>
              </div> 
        </div>
        </div>
    </main>
  );
}

export default MarketPlace;


