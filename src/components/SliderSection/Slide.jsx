import React from 'react';
import { LearnMoreIcon, SliderSideIcon, smallLogo } from '../../assets/icons';

export function SlideOne({ img, paragraph, color = '#202229', header, link }) {
  const containerStyle = {
    width: '200%',
    height: '250%',
    backgroundPosition: 'center',
    objectPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    objectFit: 'contain',
    overflow: 'hidden',
    overflowClipBox: 'content-box',
  };

  const paragraphStyle = {
    fontSize: '14px', // Adjust the font size as needed
  };

  return (
    <div className='' style={{ ...containerStyle }}>
      <div className='flex w-[100%] h-[100%] flex-col text-xs items-left gap-y-[22px] justify-center ml-20 overflow-y-hidden'>
        <div className='flex text-[#202229] font-bold text-3xl ml-10 '>
          {header[0]}
          <br />
          {header[1]}
        </div>
        <div className='ml-10 gap-x-[10px] flex flex-col'>
          {paragraph?.map((dis, index) => (
            <p className='flex flex-row items-center mt-1 gap-x-[15px] '  key={index} style={{ fontSize: '14px' }}>
              {SliderSideIcon(color)}
              {dis}
            </p>
          ))}
        </div>
        <a href={link} className='ml-8 flex align-middle items-center gap-x-[10px] h-[50px] rounded-2xl  hover:bg-[#202229] w-[150px] transition duration-300 ease-in-out group'>
          {/* <LearnMoreIcon /> */}
          <div className='flex bg-[#202229] w-[50px] items-center align-middle h-[50px] rounded-2xl flex-row justify-center'>
            <span  className='flex transition duration-300 ease-in-out group group-hover:translate-x-[100px]'>{ smallLogo()}</span>
          </div>
           <span  className='flex transition duration-300 ease-in-out group group-hover:text-white group-hover:translate-x-[-50px]'>Learn More</span>
        </a>
      </div>
    </div>
  );
}

// export function SlideTwo() {
// 	  const containerStyle: React.CSSProperties = {
//     width: '1300px',
//     height: '652px',
//     backgroundPosition: 'center',
//     objectPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundImage: `url(${bg_2})`,
//     backgroundSize: 'cover',
//     objectFit: 'contain',
//     overflow: 'hidden',
//     overflowClipBox: 'content-box',
	
//   };
//   return (
// 	  <div style={{ ...containerStyle }}>
// 		  <div className='flex w-[70%] h-[100%] flex-col items-left gap-y-[20px] justify-center ml-[50px] '>
// 			  <div className='flex text-[#202229] bold text-[40px] w-[300px] font-[700]'>
// 				  Onboard without the risk.
// 			  </div>
// 			  <div>
// 				   <p className='flex flex-row items-center align-middle gap-x-[15px] ml-[10px]'>
// 					  {SliderSideIcon("#50589F")}
// 					  We pick the best for you to select.
				 
// 			  </p>
// 			  <p className='flex flex-row items-center align-middle gap-x-[15px] ml-[10px]'>
// 					  {SliderSideIcon("#50589F")}
// 				  Thousands of vetted candidates in dozens of categories.
// 			  </p>
// 			  <p className='flex flex-row items-center align-middle gap-x-[15px] ml-[10px]'>{SliderSideIcon("#50589F")} Risk-free resource swapping for the best fit.</p>
// 			  </div>
			 
// 			  <a href="#">
// 			  <LearnMoreIcon/>
// 			  </a> 
// 		  </div>	 
// 	  </div>	
//   )
// }

