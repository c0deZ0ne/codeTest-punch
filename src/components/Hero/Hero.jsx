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
  <div className='bg-[#f8f8f8] w-full lg:mr-40 h-60 lg:ml-40 rounded-xl'>
    <ul className='absolute inset-x-4 top-4 flex justify-center items-center gap-x-[10px]'>
      <li className='bg-[#c9efc4] p-2 rounded-xl font-bold pl-5 pr-5 capitalize'>IT & development</li>
      <li className='p-2 bg-[#f2f2f2] rounded-xl text-[#898a8d] pl-5 pr-5 capitalize'>design and creative</li>
    </ul>

    <div className="flex justify-between px-10  mt-20 lg:px-0 lg:mr-20 lg:ml-20">
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
