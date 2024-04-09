import React from 'react'

import { LearnMoreIcon, SliderSideIcon } from '../../assets/icons';
export function SlideOne({img,paragraph,color='#202229',header,link}) {
	  const containerStyle: React.CSSProperties = {
    width: '100wv',
    height: '100vh',
    backgroundPosition: 'center',
    objectPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    objectFit: 'contain',
    overflow: 'hidden',
    overflowClipBox: 'content-box',
	
  };
  return (
	  <div style={{ ...containerStyle }}>
		  <div className='flex w-[100%] h-[100%] flex-col items-left gap-y-[20px] justify-center ml-[70px] '>
			  <div className='flex text-[#202229] bold text-[40px] w-[100%] font-[700] ml-[10px]'>  
				  {header[0]}
				  <br/>
				{header[1]}
				  
			  </div>
			  <div>
				  {paragraph?.map((dis) => (
					  <p className='flex flex-row items-center align-middle gap-x-[15px] ml-[10px]'>
					  {SliderSideIcon(color)}
					  {dis}
				 
			  </p>))}				
			  
			  </div>
			 
			  <a href={link}>
			  <LearnMoreIcon/>
			  </a> 
		  </div>	 
	  </div>	
  )
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

