import React from 'react';
import ExploreMore from '../../assets/Frame 626624 (2).png';
import Logo from '../../assets/Frame 55@2x.png';
export default function Footer() {
  return (
    <main className='relative  bg-[#202229] -mt-10 h-full '>



        <div className='footer bg-[#202229] h-full pt-0.5 '>

      <div className='bg-[#525aa0] transform -skew-y-3 z-0 mx-auto max-w-[calc(100%-500px) ml-20 mr-20 mt-20]'>

     

        <div className='flex justify-center items-center mt-10'>
          <div className='text-center'>
            <h1 className='text-4xl text-white mt-12 font-bold'>Need a job done, and done <br />well? Get started</h1>
            <img src={ExploreMore} alt="explore" className='w-14 h-14 mt-4 ml-44 mb-12' />
          </div> 
        </div>
      </div>

      <div className='mt-20  ml-20 flex gap-32'>
        <div>
          <img src={Logo} className="w-26 h-6" alt="logo" />
          <p className='text-sm text-gray-300 mt-5'>We take complex hiring processes - and <br /> simplify them. Connecting you to the world's <br /> highly qualified talent pool</p>
        </div>

        <div>
          <h3 className='text-4xl text-white font-bold'>
            Connecting the right people to <br /> the right businesses.
          </h3>
        </div>
      </div>
      </div>


      <div className='ml-20 mt-14 flex justify-between mr-20 text-white'>
        <div className=''>
            <h3 className='text-gray-500 mb-4 uppercase'>Links and Redirects</h3>

            <button className='bg-[#292b34] pl-8 pr-8 pt-3 pb-3 text-white rounded-xl'>Hire Now</button>
            <button className='bg-[#292b34] pl-8 pr-8 pt-3 pb-3 text-white rounded-xl ml-3'>Apply Now</button>
        </div>
        <div>
            <h3 className='text-gray-500 mb-4 uppercase'>Platform</h3>
            <p className='mb-4'>Find Work</p>
            <p className='mb-4'>Find Talent</p>
            <p className='mb-4'>Articles</p>
            <p className='mb-4'>About Us</p>
        </div>
        <div>
        <h3 className='text-gray-500 mb-4 uppercase'>Categories</h3>
            <p className='mb-4'>Data Science</p>
            <p className='mb-4'>IT & Networking</p>
            <p className='mb-4'>Web & Mobile</p>
        </div>
        <div>
        <h3 className='text-gray-500 mb-4 uppercase'>Help</h3>
        <p>Contact Us</p>
        </div>
        <div>
        <h3 className='text-gray-500 mb-4 uppercase'>Get In Touch@</h3>
        <p className='mb-4'>Instagram</p>
        <p className='mb-4'>Linkedin</p>
        <p className='mb-4'>Twitter</p>
        </div>
      


      
      </div>

      <div>
      <hr className="border-t border-gray-500 w-full mt-20" />
        <div className='flex justify-between ml-20 mr-20 mt-4'>

            <div>
                <p className='text-white'>All right reserved by zwilt</p>
            </div>
            <div className='text-gray-500 flex gap-8'>
                <p className='text whitespace-nowrap underline'>Privacy Policy</p>
                <p className='whitespace-nowrap underline mb-4'>Terms and Condition</p>
            </div>
        </div>
      </div>
    </main>
  );
}
