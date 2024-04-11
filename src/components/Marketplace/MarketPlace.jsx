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
import figma from "../../assets/figmaImage.png"

import ActionButton from '../../ui-components/ActionButton';
import { marketIconApp,figmaLogoIcon } from '../../assets/icons';
import pslogo from "../../assets/pslogo.png"
import adobe from "../../assets/adobe.png"
import ulogo from "../../assets/ulogo.png"
import cenima from "../../assets/cenima.png"
import shopifyLogo from "../../assets/shopifyLogo.png"
import puwadonLogo from "../../assets/puwadonLogo.png"
import stacker from "../../assets/image 244.png"
import wiclLogo from "../../assets/image 247.png"
function MarketPlace() {
  const cardDetails = [
    { logo:figma , title: "UX Designer" },
    { logo: pslogo, title: " Graphics Designer" },
    { logo: adobe, title: "Graphics Designer" },
    { logo: ulogo, title: "Illustration Artist" },
    { logo: cenima, title: "Unreal Engine" }
  ]
  const cardDetailsSection2 = [
    { logo: shopifyLogo, title: "Shopify Developer" },
    { logo: puwadonLogo, title: " Magento Developer" },
    { logo: stacker, title: "Data Scientist" },
    { logo: wiclLogo, title: "Webflow Developer" },
    { logo: cenima, title: "Unreal Engine" }
  ]
  return (
    <main className='h-[100%] w-[10010]'>
        <div className='relative mt-16 h-full flex bg-[#edeffe]  '>
      
        <div className='absolute inset-0 bg-[#edeffe] transform -skew-y-2 z-0' />

          <div className='z-10 mt-24 w-full'>
            <div className='flex items-center justify-center my-[70px]'>
              <h1 className='font-bold text-5xl text-[#202229] text-center  font-[800]'>Your one non-stop marketplace for finding <br />the talent your business needs.</h1>
            </div>

           



            <div className="flex justify-between px-[50px] h-[200px]  my-[20px]">
                <div className='flex flex-col gap-y-[20px]'>
              <p className='text-2xl'>
                Find dev and IT professionals to
                <br />scale your business.</p>
                <div className='flex gap-x-[20px] items-center   '>
                    <div className='flex gap-x-[10px] justify-center items-center align-middle mt-auto mb-auto'>
                      <img src={Vector3} className="" alt="Shopify Logo" />
                      <span className='text-sm'>989 Skills</span>
                    </div>
            
                <div className='flex gap-x-[10px]'>
                <img src={Vector2} className="" alt="Shopify Logo" />
                <p className='text-sm whitespace-nowrap'>45 Sub-Categories</p>
                </div>

                
          
                </div>
                <div className='flex gap-1 mt-4'>
                <img src={Vector4} className="" alt="Shopify Logo" />
                <p className='text-sm whitespace-nowrap'>1011 Profiles</p>
                </div>
                
                </div>
                
              <div className='shadow bg-white rounded-lg flex flex-col w-1/2  '>
                <h2 className=" pt-[20px] pl-[20px] ">IT & Development</h2>
                <div className="flex mt-[20px] w-full  h-[100%]  justify-around">
               
                {cardDetailsSection2.map((d) => (
                   <div className="flex flex-col items-center w-[50px] h-[50px] ">
                
                {  figmaLogoIcon(d?.logo)}
                    <p className="text-center w-[100px]">{d.title}</p>
                  </div>
                ))}
                <div className="flex flex-col items-center w-[50px] h-[50px]">
                    {marketIconApp()}
                  </div>
              
            
                </div>
                
              </div>
              
            </div>
            <div className="flex justify-between px-[50px] h-[200px]  my-[20px]">
                <div className='flex flex-col gap-y-[20px]'>
                <p className='text-2xl'>Explore creative individuals with a <br />keen eye for detail.</p>
                <div className='flex gap-x-[20px] items-center  '>
                    <div className='flex gap-x-[10px] justify-center items-center align-middle mt-auto mb-auto '>
                      <img src={Vector3} className="" alt="Shopify Logo" />
                      <span className='text-sm'>989 Skills</span>
                    </div>
            
                <div className='flex gap-x-[10px]'>
                <img src={Vector2} className="" alt="Shopify Logo" />
                <p className='text-sm whitespace-nowrap'>45 Sub-Categories</p>
                </div>

                
          
                </div>
                <div className='flex gap-1 mt-4'>
                <img src={Vector4} className="" alt="Shopify Logo" />
                <p className='text-sm whitespace-nowrap'>1011 Profiles</p>
                </div>
                
                </div>
                
              <div className='shadow bg-white rounded-lg flex flex-col w-1/2  '>
                <h2 className=" pt-[20px] pl-[20px] ">Design & Creative</h2>
                <div className="flex mt-[20px] w-full  h-[100%]  justify-around">
                <div className="flex flex-col items-center w-[50px] h-[50px]">
                    {marketIconApp()}
                  </div>
              
                {cardDetails.map((d) => (
                   <div className="flex flex-col items-center w-[50px] h-[50px] ">
                
                {  figmaLogoIcon(d?.logo)}
                    <p className="text-center w-[100px]">{d.title}</p>
                  </div>
                ))}
               
            
                </div>
                
              </div>
              
            </div>

            <div className="flex gap-96 ml-10 mb-10">
          
                <div className="flex gap-2 w-[200px]">
                    
                      <ActionButton text={'Explore More'} link={"/browse_now"}/>
                
                    </div>

                  <div className="flex flex-col mr-96 items-center">
                  
                    <p className="text-center text-gray-700 mt-[20px] ml-24"><span className='font-bold'>30 more </span> to explore</p>
                  </div>
                  </div> 
            </div>
          </div>
    </main>
  );
}

export default MarketPlace;


