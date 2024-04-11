import React from 'react';
import Search from '../Search/Search'
import SearchComponent from '../Search/Search';
import Shopify from '../../assets/zwilt-tba-1-01 2.png';
const Hero = () => {
  return (
    <main className='mt-32 justify-center items-center'>
      <div className='text-center'>
        <h2 className="text-6xl font-bold mb-4 text-[#202229]">Find the right fit   <img src={Shopify} className="w-16 -mt-2 rounded-full inline-block align-middle" alt="Shopify Logo" />has <br /> never been easier.</h2>
        <p className="text-lg text-gray-500 relative">
          With our rigorous pre-vetting process, you'll never have to <br />worry about finding the ideal candidate ever again.
          <span className="block absolute -bottom-2 inset-x-0  h-1"></span>
        </p>
        <SearchComponent/>


   

      </div>


      <div className='relative h-60 mt-12 rounded-2xl flex justify-center items-center'>
        <div className='bg-[#f8f8f8] relative w-full lg:mr-40 h-60 lg:ml-40 rounded-xl flex flex-col justify-evenly gap-y-[20px]'>
          
          <ul className=' relative inset-x-4  flex justify-center    items-center align-middle mr-auto ml-auto  w-[100%] '>
            <span className='flex justify-center align-middle self-center mr-auto ml-auto bg-[#D2D2D2] rounded-xl '>
               <li className=' hover:bg-[#c9efc4] rounded-xl p-2  font-bold pl-5 pr-5 capitalize  text-[#898a8d] hover:text-[#202229] '>IT & development</li>
           
               <li className=' hover:bg-[#c9efc4] rounded-xl p-2  font-bold pl-5 pr-5 capitalize  text-[#898a8d] hover:text-[#202229] '>Design and creativet</li>
            </span>
          </ul>

    <div className="flex justify-between px-10  lg:px-0 lg:mr-20 lg:ml-20">
      <div className="text-gray-500 text-md capitalize flex text-sm flex-col ">
        <ul className='justify-start list-none '>
          <li className='mt-2'>python developer</li>
          <li className='mt-2'>shopify developer</li>
          <li className='mt-2 text-black'>MERN stack developer</li>
          <li className='mt-2'>full stack developer</li>
        </ul>
      </div>

      <div className="text-gray-500 text-md capitalize flex text-sm flex-col">
        <ul className='list-none p-0'>
          <li className='mt-2'>data scientist</li>
          <li className='mt-2'>frontend developer</li>
          <li className='mt-2'>shopify developer</li>
          <li className='mt-2'>python developer</li>
        </ul>
      </div>

      <div className="text-gray-500 text-md capitalize flex text-sm flex-col">
        <ul className='list-none p-0'>
          <li className='mt-2'>python developer</li>
          <li className='mt-2'>shopify developer</li>
          <li className='mt-2'>MERN stack developer</li>
          <li className='mt-2 text-black'>Explore more</li>
        </ul>
      </div>
    </div>
  </div>
</div>
      
    </main>
  );
};

export default Hero;
