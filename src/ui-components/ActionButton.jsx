import React from 'react'
import { smallLogo } from '../assets/icons';

function ActionButton({link,text}) {
  return (
		   <a href={link||"#"} className='flex align-middle items-center h-[50px] rounded-2xl  hover:bg-[#202229] w-[85%] transition duration-300 ease-linear group'>
          <div className='flex bg-[#202229] w-[30%] items-center align-middle h-[50px] rounded-2xl flex-row justify-center'>
            <span  className='flex transition duration-300 ease-linear   group group-hover:translate-x-[120px] '>{ smallLogo()}</span>
          </div>
			  <span className='flex  h-[100%] items-center align-middle w-[60%] transition duration-300 ease-linear group group-hover:text-white  group-hover:translate-x-[-50%]  px-[15px]'> <pre className='font-normal font-sans flex ' > {text}</pre></span>
        </a>
  )
}

export default ActionButton