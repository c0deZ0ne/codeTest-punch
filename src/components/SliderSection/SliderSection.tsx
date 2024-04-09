import React from 'react'
import { SlideOne } from './Slide';
import bg_1 from "../../assets/slider1bg.png"
import bg_2 from "../../assets/slide2bg.png"
import sliderbg_3 from "../../assets/sliderbg_3.png"

function SliderSection() {
	const slideData = [{
		img: bg_1,
		paragraph: ["We pick the best for you to select.", "Thousands of vetted candidates in dozens of categories.", "Risk-free resource swapping for the best fit."],
		color: "#202229",
		link: "/login",
		header:["Onboard without","the risk"]
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
		{
		img: sliderbg_3,
		paragraph: ["Track your staff activity down to every minute with screenshots.", "Comprehensive timesheet data to process payments.", "Create projects to organize and assign tasks more effectively."],
		color: "#C7F4C2",
		link: "/login",
			header: ["Stay in the", "loop."]
		
		}
		
	]

	


  return (
	  <main className='  w-[100%] h-[100vh] flex-row flex relative justify-center align-middle  items-center  bg-red-500 overflow-x-auto'>
		
		  <div className='flex flex-row w-[100vw] h-[100%] ' > 
			   {slideData.map(({ img, paragraph, color, header, link }) => (
				   <SlideOne img={img} paragraph={paragraph} link={link} header={header} color={ color} />
				 					 
				  
			  ))}
		  </div>
		 
			  
	  </main>
  )
}

export default SliderSection