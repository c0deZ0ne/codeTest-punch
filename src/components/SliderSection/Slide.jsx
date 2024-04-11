import React from 'react';
import { LearnMoreIcon, SliderSideIcon, smallLogo } from '../../assets/icons';
import ActionButton from '../../ui-components/ActionButton';

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
          <div className='w-[200px] mt-[20px]'>
         <ActionButton link={"/"} text={"Lean more"}/>
          </div>

        </div>
     
        
      </div>
    </div>
  );
}

