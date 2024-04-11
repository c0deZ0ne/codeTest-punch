import React from 'react'
import { SlideOne } from './Slide';
import bg_1 from "../../assets/slider1bg.png"
import bg_2 from "../../assets/slide2bg.png"
import sliderbg_3 from "../../assets/sliderbg_3.png"
import './Slide.css'
function SliderSection() {
	const slideData = [{
		img: bg_1,
		paragraph: ["We pick the best for you to select.", "Thousands of vetted candidates in dozens of categories.", "Risk-free resource swapping for the best fit."],
		color: "#202229",
		link: "/login",
		header:["Onboard without","the risk."]
	},
		{
		img: bg_2,
		paragraph: ["Easy and transparent one-to-one chat with candidates.", "Simple and convenient payment methods.", "Review past ratings."],
		color: "#FFBE2E",
		link: "/login",
		header:["An open ","book."]
	},
		{
		img: sliderbg_3,
		paragraph: ["Track your staff activity down to every minute with screenshots.", "Comprehensive timesheet data to process payments.", "Create projects to organize and assign tasks more effectively."],
		color: "#C7F4C2",
		link: "/login",
			header: ["Stay in the", "loop."]
		
		},
		
		
	]

	


  return (
	  <main className='h-[70vh] flex-row flex relative justify-center align-middle  items-center   bg-[#fafaff] overflow-x-auto overflow-y-hidden self-center mt-auto mb-auto ' >
		<div className='w-[700px] text-right ml-10'>
			<h3 className='text-4xl text-left font-bold'>Why choose <br /> zwilt?</h3>
			<p className='text-sm text-left mt-5'>We take complex hiring processes - and <br /> simplify them. Connecting you to the world's highly qualified talent pool</p>
		</div>
		
		<div className="scroll-container-category overflow-hidden mt-auto mb-auto overflow-y-hidden">
                <div className="scroll-content-category">
          <div className="flex flex-row gap-[500px] rounded-xl ">
			   {slideData.map(({ img, paragraph, color, header, link }) => (
				<div className='w-full text-xs '>
	   <SlideOne img={img} paragraph={paragraph} link={link} header={header} color={ color} />
				</div>
			
				 					 
				  
			  ))}
		  </div>
		  </div>
		  </div>
		 
			  
	  </main>
  )
}

export default SliderSection