import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        {/* Footer section start here  */}
    <footer className="w-full bg-[#2699fb] border-t-8 border-t-[#605858] sm:py-12 py-10">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="py-7 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between">
          <div >
            <h1 className='lg:text-4xl text-[30px] font-bold text-white font-serif'>E-Learning</h1>
            <p className='mt-2 mb-5 text-white font-sans'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Quibusdam quidem quam tenetur at laborum?
            </p>
            <div className='flex gap-10'>
              <FaFacebookSquare className='text-white text-2xl cursor-pointer hover:text-black duration-1000'/>
              <FaInstagram className='text-white text-2xl cursor-pointer hover:text-black duration-1000'/>
              <FaTwitterSquare className='text-white text-2xl cursor-pointer hover:text-black duration-1000'/>
              <FaGithubSquare className='text-white text-2xl cursor-pointer hover:text-black duration-1000'/>
            </div>
          </div>
          <div className='sm:px-10 sm:py-4 mt-5 sm:mt-0'>
            <h2 className='text-black text-xl font-bold mb-2 font-serif'>Solutions</h2>
            <ul className="text-white">
              <li className="pb-2"><a className="font-sans" href="#">Anlytics</a></li>
              <li className="pb-2"><a className="font-serif" href="#">Marketing</a></li>
              <li className="pb-2"><a className="font-serif" href="#">Commerce</a></li>
              <li className="pb-2"><a className="font-serif" href="#">Insights</a></li>
            </ul>
          </div>
          <div className='sm:px-10 sm:py-4 mt-5 sm:mt-0'>
            <h2 className='text-black text-xl font-bold mb-2 font-serif'>Support</h2>
            <ul className="text-white">
              <li className="pb-2"><a className="font-sans" href="#">Pricig</a></li>
              <li className="pb-2"><a className="font-serif" href="#">Documentation</a></li>
              <li className="pb-2"><a className="font-serif" href="#">Guides</a></li>
              <li className="pb-2"><a className="font-serif" href="#">API Status</a></li>
            </ul>
          </div>
          <div className='sm:px-10 sm:py-4 mt-5 sm:mt-0'>
            <h2 className='text-black text-xl font-bold mb-2 font-serif'>Company</h2>
            <ul className="text-white">
              <li className="pb-2"><a className="font-sans" href="#">About</a></li>
              <li className="pb-2"><a className="font-serif" href="#">Blog</a></li>
              <li className="pb-2"><a className="font-serif" href="#">Jobs</a></li>
              <li className="pb-2"><a className="font-serif" href="#">Press</a></li>
              <li className="pb-2"><a className="font-serif" href="#">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    {/* Footer section end here */}
    </div>
  )
}

export default Footer