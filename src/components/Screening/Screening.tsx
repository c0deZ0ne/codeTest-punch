import React from 'react';
import { BiLoaderAlt } from "react-icons/bi";
import Human from '../../assets/human.png';
import { AiFillPlaySquare } from "react-icons/ai";
import Steps from './Steps';
export default function Screening() {
  return (

    
    <main className='relative flex flex-col gap-y-[10px] '>
    <div className='absolute inset-0 bg-[#f5f5f5] z-10'>
      <div className='absolute inset-0 bg-[#f5f5f5] transform -skew-y-20' />
      <div className="flex justify-center lg:gap-72 mt-24">

        <div className='flex flex-coll gap-y-[20px] flex-col'>
            <h4 className='text-4xl font-bold'>How we ensure you're <br /> in good hands.</h4>
            <p className='text-gray-500 mt-4'>with our comphrensive screening process, we hand-pick highly <br /> skilled candidates so you can onboard them in a matter of days</p>
            <div className=' flex flex-col gap-y-[10px] justify-evenly'>
              <Steps step={1} title="Resume Screening" />
                <div className='border flex flex-col   align-middle rounded-lg h-[40%]  border-gray-300 shadow-lg   pl-3  gap-y-[10px] mt-auto mb-auto justify-center '>
                    <div className='flex gap-x-[10px]  align-middle items-center'>
                    < AiFillPlaySquare className='text-4xl bg-[#8ba4fc] text-white p-2 rounded-full'/>
                    <p className='  text-sm'><span className='font-semibold capitalize'>step 2:</span> Video Interview</p>
                    </div>
                   <p className='text-xs text-gray-500 '>candidate are assessted through skills based question in a virtual settings. <br />Allow you to gauge personality and cultural fit.</p>

                </div>
              <Steps step={3} title="Technical Evaluation" />
              <Steps step={4} title="Application Review" />
              <Steps step={5} title="Lets get to work<" />
            </div>
        </div>
        <div>
        <div className='flex items-center mt-52 mb-44'>
        <div className="flex items-center">
      <div className="bg-[#8ba4fc] rounded-md px-2 py-1 mr-4">
      <ul className="py-2 px-4 flex flex-col">
      <li className="relative text-white mb-6 text-xs font-bold rounded-full text-center py-1">
            <BiLoaderAlt className='absolute text-3xl -ml-2.5 -mt-1.5' /> 1
          </li>
          <li className="relative mb-6  text-[#d1dbfd] text-xs font-bold rounded-full text-center py-1">
            <BiLoaderAlt className='absolute text-3xl -ml-2.5 -mt-1.5' /> 2
          </li>
          <li className="relative mb-6 text-[#d1dbfd] text-xs font-bold rounded-full text-center py-1">
            <BiLoaderAlt className='absolute text-3xl -ml-2.5 -mt-1.5' /> 3
          </li>
          <li className="relative mb-6 text-[#d1dbfd] text-xs font-bold rounded-full text-center py-1">
            <BiLoaderAlt className='absolute text-3xl -ml-2.5 -mt-1.5' /> 4
          </li>
          <li className="relative text-[#d1dbfd] font-bold text-xs rounded-full text-center py-1">
            <BiLoaderAlt className='absolute text-3xl -ml-2.5 -mt-1.5' /> 5
          </li>
        </ul>
      </div>
      <div>
        <p className=" mb-6 mt-4 rounded-md text-xs  py-1">Tell us something about yourself</p>
        <p className=" mb-6 rounded-md text-center text-gray-500 text-xs py-1">Give a short brief about your experience</p>
        <p className="mb-6 rounded-md text-center text-gray-500 text-xs py-1">Explain about good customer experience</p>
        <p className=" mb-6 rounded-md  py-1 text-gray-500 text-xs">How to manage SOP of customer care</p>
        <p className="mb-4 rounded-md text-gray-500  text-xs py-1">Tell us something about yourself</p>
      </div>
    </div>
      <img src={Human} alt="Human" className='w-60 h-60 -mt-96 mr-10 bg-[#8ba4f]' />
    </div>
 </div>
        </div>
        </div>
    
    </main>
  );
}
