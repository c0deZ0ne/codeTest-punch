import React from 'react';
import { BiLoaderAlt } from "react-icons/bi";
import Human from '../../assets/human.png';
import { AiFillPlaySquare } from "react-icons/ai";
export default function Screening() {
  return (
    <main className='relative mt-10 h-full bg-[#f5f5f5] flex'>
      <div className='absolute inset-0 bg-[#f5f5f5]'>
        <div className='absolute inset-0 bg-[#f5f5f5] transform -skew-x-20 origin-top-right z-0' />
        


        <div className="flex justify-center lg:gap-72 mt-24"> 

        <div>
            <h4 className='text-4xl font-bold'>How we ensure you're <br /> in good hands.</h4>
            <p className='text-gray-500 mt-4'>with our comphrensive screening process, we hand-pick highly <br /> skilled candidates so you can onboard them in a matter of days</p>
            <div>
                <div className='flex border rounded-lg h-14 border-gray-300 pl-3'>
                    < AiFillPlaySquare className='text-4xl bg-[#ececec] text-black p-2 mt-3 rounded-full'/>
                    <p className='mt-5 text-sm ml-2'> <span className='font-semibold capitalize'>step 1:</span> Resume Screening</p>
                </div>

                <div className='border rounded-lg h-24 mt-2 border-gray-300 shadow-lg pl-3'>
                    <div className='flex'>
                    < AiFillPlaySquare className='text-4xl bg-[#8ba4fc] text-white p-2 mt-3 rounded-full'/>
                    <p className='mt-5 ml-2 text-sm'><span className='font-semibold capitalize'>step 2:</span> Video Interview</p>
                    </div>
                   <p className='text-xs text-gray-500 mt-2'>candidate are assessted through skills based question in a virtual settings. <br />Allow you to gauge personality and cultural fit.</p>

                </div>


                <div className='flex border rounded-lg h-14 mt-1 border-gray-300 pl-3'>
                    < AiFillPlaySquare className='text-4xl bg-[#ececec] text-black p-2 mt-3 rounded-full'/>
                    <p className='mt-5 text-sm ml-2'><span className='font-semibold capitalize'>step 3:</span> Technical Evaluation</p>
                </div>

                <div className='flex border rounded-lg h-14 mt-1 border-gray-300 pl-3'>
                    < AiFillPlaySquare className='text-4xl bg-[#ececec] text-black p-2 mt-3 rounded-full'/>
                    <p className='mt-5 text-sm ml-2'><span className='font-semibold capitalize'>step 4:</span> Application Review</p>
                </div>

                <div className='flex border rounded-lg mt-1 mb-6 h-14 border-gray-300 pl-3'>
                    < AiFillPlaySquare className='text-4xl bg-[#ececec] text-black p-2 mt-3 rounded-full'/>
                    <p className='mt-5 text-sm ml-2'><span className='font-semibold capitalize'>step 5:</span> Lets get to work</p>
                </div>
            </div>
        </div>
        <div>
        <div className='flex items-center mt-52'>
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
        {/* #8ba4fc */}



        </div>
      </div>
    </main>
  );
}
