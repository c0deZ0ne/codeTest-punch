import React from 'react'
import { smallLogo } from '../assets/icons';

function ActionButton({link,text}) {
  return (
		   <a href={link||"#"} className='ml-8 flex align-middle items-center h-[50px] rounded-2xl  hover:bg-[#202229] w-[150px] transition duration-300 ease-linear group'>
          {/* <LearnMoreIcon /> */}
          <div className='flex bg-[#202229] w-[50px] items-center align-middle h-[50px] rounded-2xl flex-row justify-center'>
            <span  className='flex transition duration-300 ease-linear   group group-hover:translate-x-[100px]'>{ smallLogo()}</span>
          </div>
			  <span className='flex  transition duration-300 ease-linear group group-hover:text-white group-hover:translate-x-[-50px] px-[15px]'>{ text}</span>
        </a>
  )
}

export default ActionButton